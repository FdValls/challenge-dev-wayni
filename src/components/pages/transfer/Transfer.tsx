"use client";

import { useUserStore } from "@/stores/userStore";
import { Image } from "@heroui/react";
import { format, isYesterday } from "date-fns";

export default function TransferList() {
    const currentUser = useUserStore((state) => state.currentUser);
    const { users } = useUserStore();
    // const { data, isLoading, error } = useRandomUsers(15);

    console.log("users globales desde transfer: ", users);

    return (
        <div className="flex flex-col gap-4 mt-4">
            {currentUser && (
                <>
                    {users.map((item) => {
                        const randomDate = new Date(
                            2023,
                            Math.floor(Math.random() * 3) + 3,
                            Math.floor(Math.random() * 30) + 1,
                            Math.floor(Math.random() * 24),
                            Math.floor(Math.random() * 60),
                        );

                        const fechaFinal = isYesterday(randomDate)
                            ? `Yesterday · ${format(randomDate, "HH:mm")}`
                            : `${format(randomDate, "MMM d, yyyy · HH:mm")}`;

                        const amount = Math.floor(Math.random() * 100 + 30) * 1000;

                        return (
                            <div key={item.login.uuid} className="flex-col gap-4">
                                <div className="flex gap-8 items-center justify-between space-x-4">
                                    <div className="flex gap-2 items-center">
                                        <Image
                                            src={item.picture.medium}
                                            alt="User avatar"
                                            className="my-1 rounded-full"
                                            width={40}
                                            height={40}
                                        />
                                        <div>
                                            <h2 className="text-base font-semibold">
                                                {item.name.first}
                                            </h2>
                                            <p className="text-sm text-gray-500">{fechaFinal}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-black whitespace-nowrap">
                                        $ {amount.toLocaleString("es-AR")}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}
