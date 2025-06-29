"use client";

import { useGenerateNewUser, useRandomUsers } from "@/hook/useRandomUser";
import { useUserStore } from "@/stores/userStore";
import { Image } from "@heroui/react";

export default function TransferList() {
    const currentUser = useUserStore((state) => state.currentUser);

    const { data, isLoading, error } = useRandomUsers(5);

    console.log("data: ", data?.results);

    if (isLoading) return <div>Loading user...</div>;
    if (error) return <div>Error loading user: {error.message}</div>;

    return (
        <div>
            <h2>Latest transfer</h2>
            {currentUser && !isLoading && (
                <>
                    {data?.results.map((item) => {
                        return (
                            <div key={item.login.uuid} className="flex-col gap-4">
                                <div className="flex gap-2 items-center space-x-4">
                                    <Image
                                        src={item.picture.medium}
                                        alt="User avatar"
                                        className="my-1 rounded-full"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            {item.name.title} {item.name.first} {item.name.last}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
}
