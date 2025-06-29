"use client";
import { Avatar, Button, Divider } from "@heroui/react";
import MainLayout from "../../components/pages/layout/MainLayout";
import { useRouter } from "next/navigation";
import AvatarCarousel from "@/components/avatarCarousel/AvatarCarousel";
import { useUserStore } from "@/stores/userStore";
import { useEffect, useState } from "react";
import { RandomUserProps } from "@/interfaces/RandomUserProps";
import { inter } from "@/config/fonts";

export default function Home() {
    const router = useRouter();
    const { logout } = useUserStore();
    const [selectedContact, setSelectedcontact] = useState<RandomUserProps>();
    const currentUser = useUserStore((state) => state.currentUser);
    const { setSelectedContact } = useUserStore();

    useEffect(() => {
        if (selectedContact) {
            setSelectedContact(selectedContact);
            router.push("/sendAgain");
            console.log("contactSelected: ", selectedContact);
        }
    }, [setSelectedcontact, selectedContact, setSelectedContact, router]);

    const handleLogout = () => {
        logout();
    };

    type Transaction = {
        id: string;
        icon?: React.ReactNode;
        title: string;
        date: string;
        amount: number;
        currency: string;
        total?: React.ReactNode;
    };

    const transactions: Transaction[] = [
        {
            id: "1",
            title: "Internet",
            date: "2023-05-16T17:34:00",
            amount: -24.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $24.000</p>,
        },
        {
            id: "2",
            title: "Transfer",
            date: "2025-06-28T19:12:00",
            amount: -600.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $600.000</p>,
        },
        {
            id: "3",
            title: "CashIn",
            date: "2023-05-29T19:12:00",
            amount: 260.0,
            currency: "$",
            total: <p className="text-green-500 font-semibold">+ $260.000</p>,
        },
        {
            id: "4",
            title: "Insurance",
            date: "2023-04-23T11:28:00",
            amount: -100.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $100.000</p>,
        },
        {
            id: "5",
            title: "Transfer",
            date: "2025-06-28T19:12:00",
            amount: -600.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $600.000</p>,
        },
        {
            id: "6",
            title: "Groceries",
            date: "2023-06-02T13:20:00",
            amount: -89.5,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $89.500</p>,
        },
        {
            id: "7",
            title: "Salary",
            date: "2023-06-01T08:00:00",
            amount: 1200.0,
            currency: "$",
            total: <p className="text-green-500 font-semibold">+ $1.200.000</p>,
        },
    ];

    return (
        <>
            <MainLayout
                headerContent={
                    <>
                        <div className="flex items-center gap-2">
                            <Avatar
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                            <div className="flex flex-col gap-0">
                                <h2>{currentUser?.name.first}</h2>
                                <div>
                                    <p>Your Balance: ${localStorage.getItem("balance")}</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
                bodyContent={
                    <>
                        <div>
                            <div>
                                <p className={`title-section ${inter.className} text-center`}>
                                    Send Again
                                </p>
                                <AvatarCarousel setSelectedcontact={setSelectedcontact} />
                            </div>
                            <div className="max-h-[13rem] xl1:max-h-[22rem] overflow-y-auto">
                                {transactions.map((tx) => (
                                    <div
                                        key={tx.id}
                                        className="flex items-center justify-between px-4 py-3 border-b"
                                    >
                                        <div className="flex items-center space-x-3">
                                            {tx.icon}
                                            <div>
                                                <p className="font-medium text-sm">{tx.title}</p>
                                                <p className="text-xs text-gray-500">
                                                    {new Date(tx.date).toLocaleString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    })}
                                                    {new Date(tx.date).toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        {tx.total}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }
                footerContent={
                    <>
                        <div>
                            <Divider className="my-2" />
                            <Button color="primary">Home</Button>
                            <Button onPress={() => router.push("/transfer")} color="primary">
                                Transfer
                            </Button>
                            <Button onPress={() => router.push("/userProfile")} color="primary">
                                User Profile
                            </Button>
                            <button onClick={handleLogout}>Cerrar Sesión</button>
                        </div>
                    </>
                }
            ></MainLayout>
        </>
    );
}
