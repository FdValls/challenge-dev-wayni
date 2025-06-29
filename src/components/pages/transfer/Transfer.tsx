"use client";

import { inter } from "@/config/fonts";
import { TransferListProps } from "@/interfaces/TransferListProps";
import { useUserStore } from "@/stores/userStore";
import { Image, Button } from "@heroui/react";
import { format, isYesterday, isWithinInterval } from "date-fns";
import { useMemo } from "react";

export default function TransferList({ userList, dateBetween, onResetDates }: TransferListProps) {
    const currentUser = useUserStore((state) => state.currentUser);

    const processedUserList = useMemo(() => {
        if (!userList) return [];

        return userList.map((item) => {
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

    // Filtrar por rango de fechas
    const filteredUserList = useMemo(() => {
        if (!dateBetween || !dateBetween.start || !dateBetween.end) {
            return processedUserList;
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

            console.log("Date range:", {
                start: startDate.toISOString(),
                end: endDate.toISOString(),
                startDateValue: dateBetween.start,
                endDateValue: dateBetween.end,
            });

            return processedUserList.filter((item) => {
                const itemDate = item.randomDate;
                const isInRange = isWithinInterval(itemDate, { start: startDate, end: endDate });

                console.log(
                    `${item.name.first} - ${item.fechaFinal} (${itemDate.toISOString()}) is in range: ${isInRange}`,
                );

                return isInRange;
            });
        } catch (error) {
            console.error("Error filtering dates:", error);
            return processedUserList;
        }
    }, [processedUserList, dateBetween]);

    // Calcular total amount de los items filtrados
    const totalAmount = useMemo(() => {
        return filteredUserList.reduce((sum, item) => sum + item.amount, 0);
    }, [filteredUserList]);

    const handleResetDates = () => {
        if (onResetDates) {
            onResetDates();
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4 mt-4 max-h-screen">
                {/* Header con información del filtro y botón reset */}
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
                            className={`bg-emerald-400 text-white font-semibold text-[10px]`}
                            onPress={handleResetDates}
                        >
                            Clear Filters
                        </Button>
                    )}
                </div>

                {/* Lista de transacciones */}
                {currentUser && (
                    <>
                        {filteredUserList.length > 0 ? (
                            filteredUserList.map((item) => (
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
                                    No transactions found for the selected date range
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
