"use client";
import { DateRangePicker, DateValue, RangeValue } from "@heroui/react";
import MainLayout from "../../components/pages/layout/MainLayout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import TransferList from "@/components/pages/transfer/Transfer";
import { inter } from "@/config/fonts";
import { useUserStore } from "@/stores/userStore";
import { useState } from "react";
export default function Transfer() {
    const router = useRouter();
    const { users } = useUserStore();
    const [dateBetween, setDateBetween] = useState<RangeValue<DateValue> | null>();

    const handleResetDates = () => {
        setDateBetween(null);
    };

    return (
        <MainLayout
            expanded={true}
            hasFooter={false}
            headerContent={
                <div className="flex gap-[6rem] items-center justify-items-center">
                    <Icon
                        onClick={() => router.back()}
                        icon="icons8:left-arrow"
                        className="cursor-pointer text-[18px] text-white"
                    />
                    <p className={`${inter.className} font-bold text-[20px] text-white`}>
                        Transfers
                    </p>
                </div>
            }
            bodyContent={
                <>
                    <div className="flex flex-col gap-2">
                        <p className={`${inter.className} font-bold text-[20px]`}>
                            Latest transfer
                        </p>
                        <DateRangePicker
                            aria-label="filterDate"
                            onChange={(value) => {
                                setDateBetween(value);
                            }}
                            value={dateBetween}
                            className="max-w-xs"
                            label="Stay duration"
                        />
                    </div>
                    <div className="max-h-[22rem] xl1:max-h-[32rem] overflow-y-auto p-2">
                        <TransferList
                            userList={users}
                            dateBetween={dateBetween}
                            onResetDates={handleResetDates}
                        />
                    </div>
                </>
            }
        ></MainLayout>
    );
}
