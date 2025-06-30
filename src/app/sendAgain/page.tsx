"use client";

import MainLayout from "@/components/pages/layout/MainLayout";
import { inter } from "@/config/fonts";
import { useTempTransactionStore } from "@/stores/tempTransactionStore";
import { useUserStore } from "@/stores/userStore";
import { Avatar, Button, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function SendAgain() {
    const { selectedContact } = useUserStore();
    const { setTempTransaction } = useTempTransactionStore();
    const [amountValue, setAmountValue] = useState("");
    const [valueTextAreaLabel, setValueTextAreaLabel] = useState("For food");
    const currenAmount = useRef(localStorage.getItem("balance"));
    const router = useRouter();

    const formatNumber = (value: any) => {
        const number = value.replace(/\D/g, "");
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleAmountChange = (e: any, setter: any) => {
        const value = e.target.value;
        const formatted = formatNumber(value);
        setter(formatted);
    };
    const handleSubmit = () => {
        setTempTransaction({
            amount: amountValue,
            valueTextArea: valueTextAreaLabel,
            lastNameUserTransfer: selectedContact?.name.last,
            nameUserTransfer: selectedContact?.name.first,
        });
        router.push("/sendAgainTwo");
    };

    return (
        <>
            <MainLayout
                hasFooter={true}
                headerContent={
                    <>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-[5.5rem] items-center">
                                <Icon
                                    onClick={() => router.back()}
                                    icon="icons8:left-arrow"
                                    className="cursor-pointer text-[18px] text-white"
                                />
                                <p
                                    className={`${inter.className} font-bold text-[20px] text-white`}
                                >
                                    Send Again
                                </p>
                            </div>
                            <div
                                className={`flex flex-col gap-4 ${inter.className} font-light text-[14px] text-white`}
                            >
                                <div className="flex flex-col items-center">
                                    <p>Your Balance:</p>
                                    <p className="font-bold text-[24px]">${currenAmount.current}</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
                bodyContent={
                    <>
                        <div
                            className={`${inter.className} flex items-center gap-4 place-content-center`}
                        >
                            <div className="flex flex-col gap-4 items-center justify-self-center">
                                <Avatar size="md" src={`${selectedContact?.picture.medium}`} />
                                <div>
                                    <p>{`${selectedContact?.name.first} ${selectedContact?.name.last}`}</p>
                                </div>
                                <div>
                                    <p
                                        className={`${inter.className} font-normal text-[20px] text-[#121212]`}
                                    >
                                        Set Amount
                                    </p>
                                </div>
                                <div className="bg-white w-full rounded-lg shadow-lg">
                                    <div className="flex items-center border-2 border-emerald-400 rounded-lg focus-within:ring-2 focus-within:ring-emerald-400 transition-all">
                                        <span className=" text-4xl font-bold text-gray-400">$</span>
                                        <input
                                            type="text"
                                            value={amountValue}
                                            onChange={(e) => handleAmountChange(e, setAmountValue)}
                                            placeholder="0"
                                            className="w-full flex-1 px-4 py-3 text-4xl font-bold text-gray-400 bg-transparent focus:outline-none text-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-2 ${inter.className} font-normal text-[18px]`}>
                            <p className={`mt-2 text-[18px]`}>Notes</p>
                            <Textarea
                                className="max-w-xs mt-2"
                                placeholder={valueTextAreaLabel}
                                onValueChange={(value) => setValueTextAreaLabel(value)}
                                classNames={{
                                    input: "placeholder:text-gray-400 placeholder:italic placeholder:text-sm",
                                }}
                            />
                        </div>
                    </>
                }
                footerContent={
                    <>
                        <div className="p-2 my-2">
                            <Button
                                isDisabled={
                                    Number(amountValue.replace(/,/g, "")) >=
                                        Number(currenAmount.current) ||
                                    Number(amountValue.replace(/,/g, "")) === 0
                                }
                                onPress={() => handleSubmit()}
                                className="bg-emerald-400 w-full"
                                radius="full"
                            >
                                <p
                                    className={`${inter.className} p-2 font-bold text-[18px] text-white`}
                                >
                                    Proceed to Transfer
                                </p>
                            </Button>
                        </div>
                    </>
                }
            />
        </>
    );
}
