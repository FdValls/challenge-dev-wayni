"use client";

import { Avatar } from "@heroui/react";
import { inter } from "@/config/fonts";
import { useUserStore } from "@/stores/userStore";

export default function ProfileData() {
    const currentUser = useUserStore((state) => state.currentUser);

    return (
        <>
            <div>
                <div className="flex-col place-items-center justify-self-center gap-2">
                    <Avatar
                        className="place-items-center w-[230px] h-[230px]"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                    <div className="flex flex-col place-items-center gap-0">
                        <p className={`${inter.className} font-bold text-[32px]`}>
                            {currentUser?.name.first}
                        </p>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-2 ${inter.className} text-[16px] mt-4`}>
                <div className="flex justify-between">
                    <p className={`text-[#999999]`}>City</p>
                    <p className={`font-bold text-black`}>{currentUser?.location.city}</p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[#999999]`}>State</p>
                    <p className={`font-bold text-black`}>{currentUser?.location.state}</p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[#999999]`}>Street</p>
                    <p className={`font-bold text-black`}>
                        {currentUser?.location.street.name} {currentUser?.location.street.number}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[#999999]`}>Email</p>
                    <p className={`font-bold text-black`}>{currentUser?.email}</p>
                </div>
                <div className="flex justify-between">
                    <p className={`text-[#999999]`}>Phone</p>
                    <p className={`font-bold text-black`}>{currentUser?.phone}</p>
                </div>
            </div>
        </>
    );
}
