import { DateRangePicker, DateValue, RangeValue } from "@heroui/react";
import TransferList from "./TransferList";
import { inter } from "@/config/fonts";
import { useState } from "react";
import { useUserStore } from "@/stores/userStore";

export default function BodyTransfer() {
    const { users } = useUserStore();
    const [dateBetween, setDateBetween] = useState<RangeValue<DateValue> | null>();

    const handleResetDates = () => {
        setDateBetween(null);
    };
    return (
        <>
            <div className="flex flex-col gap-2">
                <p className={`${inter.className} font-bold text-[20px]`}>Latest transfer</p>
                <DateRangePicker
                    aria-label="filterDate"
                    onChange={(value) => {
                        setDateBetween(value);
                    }}
                    value={dateBetween}
                    className="max-w-xs"
                    label="Range of dates"
                />
            </div>
            <div className="xl1:max-h-[45rem] overflow-y-auto p-2">
                <TransferList
                    userList={users}
                    dateBetween={dateBetween}
                    onResetDates={handleResetDates}
                />
            </div>
        </>
    );
}
