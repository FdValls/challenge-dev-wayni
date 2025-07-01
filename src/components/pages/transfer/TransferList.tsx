"use client";

import { inter } from "@/config/fonts";
import { ITransferListProps } from "@/interfaces/ITransferListProps";
import { useUserStore } from "@/stores/userStore";
import { Image, Button } from "@heroui/react";
import { format, isYesterday, isWithinInterval } from "date-fns";
import { useEffect, useMemo } from "react";

export default function TransferList({ userList, dateBetween, onResetDates }: ITransferListProps) {
    const currentUser = useUserStore((state) => state.currentUser);

    const processedUserList = useMemo(() => {
        if (!userList) return [];

        return userList
            .filter((item) => item?.login?.uuid)
            .map((item) => {
                const seed = item.login.uuid.split("").reduce((a, b) => {
                    a = (a << 5) - a + b.charCodeAt(0);
                    return a & a;
                }, 0);

                const seededRandom = (min: number, max: number, offset: number = 0) => {
                    const x = Math.sin(seed + offset) * 10000;
                    return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
                };

                const currentYear = new Date().getFullYear();

                const randomDate = new Date(
                    currentYear,
                    seededRandom(0, 11, 1),
                    seededRandom(1, 28, 2),
                    seededRandom(0, 23, 3),
                    seededRandom(0, 59, 4),
                );

                const fechaFinal = isYesterday(randomDate)
                    ? `Yesterday · ${format(randomDate, "HH:mm")}`
                    : `${format(randomDate, "MMM d, yyyy · HH:mm")}`;

                const amount = seededRandom(30, 130, 5) * 1000;

                return {
                    ...item,
                    randomDate,
                    fechaFinal,
                    amount,
                };
            });
    }, [userList]);

    useEffect(() => {
        if (processedUserList.length > 0) {
            localStorage.setItem("listTransfer", JSON.stringify(processedUserList));
        }
    }, [processedUserList]);

    const initialListFromStorage = useMemo(() => {
        const raw = localStorage.getItem("listTransfer");
        return raw ? JSON.parse(raw) : [];
    }, []);

    const baseList = processedUserList.length > 0 ? processedUserList : initialListFromStorage;

    const filteredUserList = useMemo(() => {
        if (!dateBetween || !dateBetween.start || !dateBetween.end) {
            return baseList;
        }

        try {
            const startDate = new Date(
                dateBetween.start.year,
                dateBetween.start.month - 1,
                dateBetween.start.day,
            );
            const endDate = new Date(
                dateBetween.end.year,
                dateBetween.end.month - 1,
                dateBetween.end.day,
                23,
                59,
                59,
            );

            return baseList.filter((item: any) => {
                const itemDate = new Date(item.randomDate);
                return isWithinInterval(itemDate, { start: startDate, end: endDate });
            });
        } catch (error) {
            console.error("Error filtering dates:", error);
            return baseList;
        }
    }, [baseList, dateBetween]);

    const totalAmount = useMemo(() => {
        return filteredUserList.reduce((sum: any, item: any) => sum + item.amount, 0);
    }, [filteredUserList]);

    const handleResetDates = () => {
        if (onResetDates) {
            onResetDates();
        }
    };

    const displayList =
        dateBetween && dateBetween.start && dateBetween.end ? filteredUserList : baseList;

    return (
        <>
            <div className="flex flex-col gap-4 mt-4 h-[28rem] xl1:h-[41rem]">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <p
                            className={`${inter.className} font-extralight text-[14px] text-[#999999]`}
                        >
                            {dateBetween && dateBetween.start && dateBetween.end
                                ? `Filtered: ${filteredUserList.length} of ${processedUserList.length} transactions`
                                : `Total: ${processedUserList.length} transactions`}
                        </p>
                        <p className={`${inter.className} font-normal text-[18px]`}>
                            Total Amount: ${totalAmount.toLocaleString("es-AR")}
                        </p>
                    </div>

                    {dateBetween && dateBetween.start && dateBetween.end && (
                        <Button
                            color="secondary"
                            size="sm"
                            className={`${inter.className} bg-emerald-400 text-white font-semibold text-[10px]`}
                            onPress={handleResetDates}
                        >
                            Clear Filters
                        </Button>
                    )}
                </div>

                {currentUser && (
                    <>
                        {displayList.length > 0 ? (
                            displayList.map((item: any) => (
                                <div key={item.login.uuid} className="flex-col gap-4">
                                    <div className="flex gap-8 items-center justify-between space-x-4">
                                        <div className="flex gap-2 items-center">
                                            <Image
                                                src={item.picture.medium}
                                                alt="User avatar"
                                                className="my-1 rounded-full"
                                                width={40}
                                                height={40}
                                            />
                                            <div>
                                                <h2
                                                    className={`${inter.className} font-normal text-[18px]`}
                                                >
                                                    {item.name.first}
                                                </h2>
                                                <p
                                                    className={`${inter.className} font-extralight text-[14px] text-[#999999]`}
                                                >
                                                    {item.fechaFinal}
                                                </p>
                                            </div>
                                        </div>
                                        <p
                                            className={`${inter.className} text-sm font-semibold text-black whitespace-nowrap`}
                                        >
                                            $ {item.amount.toLocaleString("es-AR")}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <p className={`${inter.className} text-gray-500 title-custom`}>
                                    {!dateBetween || !dateBetween.start || !dateBetween.end
                                        ? "No transactions available"
                                        : "No transactions found for the selected date range"}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
