"use client";
import { Avatar } from "@heroui/react";
import MainLayout from "../../components/pages/layout/MainLayout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import TransferList from "@/components/pages/transfer/Transfer";
import { inter } from "@/config/fonts";
export default function Transfer() {
    const router = useRouter();
    return (
        <MainLayout
            expanded={true}
            headerContent={
                <div className="flex gap-[6rem] items-center justify-items-center">
                    <Icon
                        onClick={() => router.back()}
                        icon="icons8:left-arrow"
                        className="cursor-pointer"
                    />
                    <p>Transfers</p>
                </div>
            }
            bodyContent={
                <>
                    <div className="max-h-[28rem] xl1:max-h-[38rem] overflow-y-auto p-2">
                        <p className={`${inter.className} font-bold text-[20px]`}>
                            Latest transfer
                        </p>
                        <TransferList />
                    </div>
                </>
            }
        ></MainLayout>
    );
}
