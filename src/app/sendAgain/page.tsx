"use client";

import MainLayout from "@/components/pages/layout/MainLayout";
import { useUserStore } from "@/stores/userStore";
import { Avatar, Button, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SendAgain() {
    const { selectedContact } = useUserStore();
    const [amount, setAmount] = useState("");
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

    return (
        <>
            <MainLayout
                headerContent={
                    <>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-[6.5rem] items-center">
                                <Icon
                                    onClick={() => router.back()}
                                    icon="icons8:left-arrow"
                                    className="cursor-pointer"
                                />
                                <h2>Send Again</h2>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col items-center">
                                    <p>Your Balance:</p>
                                    <p> ${localStorage.getItem("balance")}</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
                bodyContent={
                    <>
                        <div className="flex items-center gap-4 place-content-center">
                            <div className="flex flex-col gap-4 items-center justify-self-center">
                                <Avatar size="md" src={`${selectedContact?.picture.medium}`} />
                                <div>
                                    <p>{`${selectedContact?.name.first} ${selectedContact?.name.last}`}</p>
                                </div>
                                <div>
                                    <p>Set Amount</p>
                                </div>
                                <div className="bg-white w-full rounded-lg shadow-lg">
                                    <div className="flex items-center border-2 border-emerald-400 rounded-lg focus-within:ring-2 focus-within:ring-emerald-400 transition-all">
                                        <span className=" text-4xl font-bold text-gray-400">$</span>
                                        <input
                                            type="text"
                                            value={amount}
                                            onChange={(e) => handleAmountChange(e, setAmount)}
                                            placeholder="0"
                                            className="w-full flex-1 px-4 py-3 text-4xl font-bold text-gray-400 bg-transparent focus:outline-none text-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p>Notes</p>
                            <Textarea
                                className="max-w-xs"
                                placeholder="For food"
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
                                onPress={() => router.push("/sendAgainTwo")}
                                className="bg-emerald-400 w-full"
                                radius="full"
                            >
                                <p>Proceed to Transfer</p>
                            </Button>
                        </div>
                    </>
                }
            />
        </>
    );
}
