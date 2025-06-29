"use client";
import { Avatar } from "@heroui/react";
import MainLayout from "../../components/pages/layout/MainLayout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import TransferList from "@/components/pages/transfer/Transfer";
import ProfileData from "@/components/pages/userProfile/Profile";
export default function Profile() {
    const router = useRouter();
    return (
        <MainLayout
            expanded={true}
            headerContent={
                <div className="flex gap-[7.5rem] items-center justify-items-center">
                    <Icon
                        onClick={() => router.back()}
                        icon="icons8:left-arrow"
                        className="cursor-pointer"
                    />
                    <p>Profile</p>
                </div>
            }
            bodyContent={
                <>
                    <div className="max-h-[28rem] xl1:max-h-[38rem] overflow-y-auto p-2">
                        <ProfileData />
                    </div>
                </>
            }
        ></MainLayout>
    );
}
