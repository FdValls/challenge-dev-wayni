"use client";

import { useUserStore } from "@/stores/userStore";
import MainLayout from "../layout/MainLayout";
import { Avatar } from "@heroui/react";

export default function ProfileData() {
    const currentUser = useUserStore((state) => state.currentUser);

    return (
        <>
            <div>
                <div className="flex-col place-items-center justify-self-center gap-2">
                    <Avatar
                        className="place-items-center"
                        size="md"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                    <div className="flex flex-col place-items-center gap-0">
                        <h2>{currentUser?.name.first}</h2>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div>
                    <div className="flex justify-between">
                        <p>City</p>
                        <p>Amount</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Payment</p>
                        <p>Amount</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Payment</p>
                        <p>Amount</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Payment</p>
                        <p>Amount</p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
                        <p>Payment</p>
                        <p>Amount</p>
                    </div>
                </div>
            </div>
        </>
    );
}
