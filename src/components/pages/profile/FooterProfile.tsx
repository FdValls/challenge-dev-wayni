"use client";

import { inter } from "@/config/fonts";
import { useUserStore } from "@/stores/userStore";

export default function FooterProfile() {
    const currentUser = useUserStore((state) => state.currentUser);

    return (
        <div
            className={`w-full flex justify-between ${inter.className} text-[16px] text-[#999999] p-2`}
        >
            <p>ID</p>
            <p>{currentUser?.login.uuid}</p>
        </div>
    );
}
