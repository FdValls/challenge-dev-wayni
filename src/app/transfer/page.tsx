"use client";
import { Avatar } from "@heroui/react";
import MainLayout from "../../components/pages/home/layouts/MainLayout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import TransferList from "@/components/pages/Profile/Transfer";
export default function Transfer() {
    const router = useRouter();
    return (
        <MainLayout
            expanded={true}
            headerContent={
                <div className="flex gap-4 items-center justify-items-center">
                    <Icon
                        onClick={() => router.back()}
                        icon="icons8:left-arrow"
                        className="cursor-pointer"
                    />
                    <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </div>
            }
            bodyContent={
                <>
                    <div className="max-h-[22rem] overflow-y-auto">
                        <TransferList />
                    </div>
                </>
            }
        ></MainLayout>
    );
}
