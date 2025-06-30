"use client";
import MainLayout from "../../components/pages/layout/MainLayout";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import ProfileData from "@/components/pages/profile/Profile";
import { inter } from "@/config/fonts";
import { useUserStore } from "@/stores/userStore";
export default function Profile() {
    const router = useRouter();
    const currentUser = useUserStore((state) => state.currentUser);

    return (
        <MainLayout
            expanded={true}
            hasFooter={true}
            headerContent={
                <div className="flex gap-[7.5rem] items-center justify-items-center">
                    <Icon
                        onClick={() => router.back()}
                        icon="icons8:left-arrow"
                        fontSize={18}
                        className="cursor-pointer text-white "
                    />
                    <p className={`${inter.className} font-bold text-[20px] text-white`}>Profile</p>
                </div>
            }
            bodyContent={
                <>
                    <div>
                        <ProfileData userList={currentUser} />
                    </div>
                </>
            }
            footerContent={
                <>
                    <div
                        className={`w-full flex justify-between ${inter.className} text-[16px] text-[#999999] p-2`}
                    >
                        <p>ID</p>
                        <p>{currentUser?.login.uuid}</p>
                    </div>
                </>
            }
        ></MainLayout>
    );
}
