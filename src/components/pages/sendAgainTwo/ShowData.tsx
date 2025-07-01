"use client";

import { inter } from "@/config/fonts";
import { Avatar } from "@heroui/react";
import { formattedDate } from "./utils/FormattedDate";
import { useUserStore } from "@/stores/userStore";
import { useTempTransactionStore } from "@/stores/tempTransactionStore";

export default function ShowData() {
    const { amount, valueTextArea } = useTempTransactionStore();
    const { selectedContact } = useUserStore();
    return (
        <>
            <div className={`${inter.className} items-center justify-items-center`}>
                <p className=" font-bold text-[18px] text-emerald-400">Transfer Successful</p>
                <p className=" font-bold text-[14px] text-[#999999]">
                    Your transacion was successfull
                </p>

                <p className={`${inter.className} font-bold text-[35px]`}>${amount}</p>
            </div>

            <div className="flex flex-col items-center gap-2 mt-8">
                <p className={`${inter.className} font-bold`}>Send To</p>
                <div className="flex gap-2 items-center justify-items-center xl1:mt-4">
                    <Avatar
                        size="md"
                        className="xl1:w-[160px] xl1:h-[160px] w-[150px] h-[150px]"
                        src={selectedContact?.picture.large}
                    />
                    <div className={`${inter.className} flex flex-col text-[16px]`}>
                        <p>{selectedContact?.name.first}</p>
                        <p>{selectedContact?.name.last}</p>
                    </div>
                </div>
            </div>

            <p className="font-bold mt-10">Transaction Details</p>
            <div className={`flex flex-col gap-4 mt-4 ${inter.className}`}>
                <div className="flex justify-between">
                    <p className={`text-[16px] text-[#999999]`}>Payment</p>
                    <p className={`text-[16px] font-bold text-black`}>$ {amount}</p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[16px] text-[#999999]`}>Notes</p>
                    <p className={`text-[16px] font-bold text-black`}>{valueTextArea}</p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[16px] text-[#999999]`}>Date</p>
                    <p className={`text-[16px] font-bold text-black`}>
                        {formattedDate.split("at")[0]}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[16px] text-[#999999]`}>Time</p>
                    <p className={`text-[16px] font-bold text-black`}>
                        {formattedDate.split("at")[1]}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[16px] text-[#999999]`}>Reference Number</p>
                    <p className={`text-[16px] font-bold text-black`}>#9999999</p>
                </div>
            </div>
        </>
    );
}
