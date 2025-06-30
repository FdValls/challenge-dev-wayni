"use client";

import SendAgainTwoLayout from "@/components/pages/sendAgainTwo/layout/SendAgainTwoLayout";
import ShowData from "@/components/pages/sendAgainTwo/ShowData";
import { inter } from "@/config/fonts";
import { useTempTransactionStore } from "@/stores/tempTransactionStore";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SendAgainTwo() {
    const router = useRouter();
    const { amount, valueTextArea, nameUserTransfer, lastNameUserTransfer } =
        useTempTransactionStore();

    return (
        <SendAgainTwoLayout
            bodyContent={
                <>
                    <ShowData
                        amountTotal={amount}
                        note={valueTextArea}
                        lastNameUserTransfer={lastNameUserTransfer}
                        nameUserTransfer={nameUserTransfer}
                    />
                </>
            }
            footerContent={
                <>
                    <div className="flex flex-col gap-4 p-0 mt-8">
                        <Button
                            variant="bordered"
                            className={`bg-emerald-400 w-full border-2 border-white`}
                            radius="full"
                        >
                            <p className={`font-bold text-white text-[18px]`}>Share</p>
                        </Button>
                        <Button
                            onPress={() => router.push("/home")}
                            className="bg-white w-full"
                            radius="full"
                        >
                            <p
                                className={`${inter.className} p-2 font-bold text-[18px] text-emerald-400`}
                            >
                                Back To Home
                            </p>
                        </Button>
                    </div>
                </>
            }
        />
    );
}
