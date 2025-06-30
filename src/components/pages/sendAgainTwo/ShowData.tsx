"use client";

import { inter } from "@/config/fonts";
import { SendAgainTwoProps } from "@/interfaces/SendAgainTwoProps";
import { Avatar } from "@heroui/react";

export default function ShowData({
    amountTotal,
    note,
    lastNameUserTransfer,
    nameUserTransfer,
}: SendAgainTwoProps) {
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });

    return (
        <>
            <div className={`${inter.className} items-center justify-items-center`}>
                <p className=" font-bold text-[18px] text-emerald-400">Transfer Successful</p>
                <p className=" font-bold text-[14px] text-[#999999]">
                    Your transacion was successfull
                </p>

                <p className={`${inter.className} font-bold text-[35px]`}>${amountTotal}</p>
            </div>

            <div className="flex flex-col items-center gap-2 ">
                <p className={`${inter.className} font-bold`}>Send To</p>
                <div className="flex gap-2">
                    <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <div className={`${inter.className} flex flex-col text-[16px]`}>
                        <p>{nameUserTransfer}</p>
                        <p>{lastNameUserTransfer}</p>
                    </div>
                </div>
            </div>

            <p className="font-bold">Transaction Details</p>
            <div className={`flex flex-col gap-1 mt-2 ${inter.className}`}>
                <div className="flex justify-between">
                    <p className={`text-[16px] text-[#999999]`}>Payment</p>
                    <p className={`text-[16px] font-bold text-black`}>{amountTotal}</p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[16px] text-[#999999]`}>Notes</p>
                    <p className={`text-[16px] font-bold text-black`}>{note}</p>
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
