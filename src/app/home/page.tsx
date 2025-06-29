"use client";
import { Avatar, Button, Divider } from "@heroui/react";
import MainLayout from "../../components/pages/home/layouts/MainLayout";
import { useRouter } from "next/navigation";
import AvatarCarousel from "@/components/pages/AvatarCarousel/AvatarCarousel";
import { useUserStore } from "@/stores/userStore";
import { useRandomMainUser, useRandomUsers } from "@/hook/useRandomUser";
import { useEffect, useState } from "react";
import { RandomUserProps } from "@/interfaces/RandomUserProps";

export default function Home() {
    const router = useRouter();
    const { logout } = useUserStore();
    const { data: mainUser } = useRandomMainUser();
    const { data, isLoading, error } = useRandomUsers();
    const [regularContacts, setRegularContacts] = useState<RandomUserProps[]>();
    const currentUser = useUserStore((state) => state.currentUser);

    useEffect(() => {
        setRegularContacts(data?.results);
    }, [data]);

    console.log("usersData: ", regularContacts);
    console.log("currentUser from home: ", mainUser?.results[0]);
    const handleLogout = () => {
        logout();
    };

    type Transaction = {
        id: string;
        icon?: React.ReactNode; // ej: "FaDownload", "FaExchangeAlt", "FaMoneyBillWave", etc.
        title: string;
        date: string; // en formato legible o ISO
        amount: number;
        currency: string; // "$"
        total?: React.ReactNode;
    };

    const transactions: Transaction[] = [
        {
            id: "1",
            //   icon: <FaDownload className="text-purple-600" />,
            title: "Internet",
            date: "2023-05-16T17:34:00",
            amount: -24.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $24.000</p>,
        },
        {
            id: "2",
            //   icon: <FaExchangeAlt className="text-purple-600" />,
            title: "Transfer",
            date: "2025-06-28T19:12:00",
            amount: -600.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $600.000</p>,
        },
        {
            id: "3",
            //   icon: <FaMoneyBillWave className="text-purple-600" />,
            title: "CashIn",
            date: "2023-05-29T19:12:00",
            amount: 260.0,
            currency: "$",
            total: <p className="text-green-500 font-semibold">+ $260.000</p>,
        },
        {
            id: "4",
            //   icon: <FaShieldAlt className="text-purple-600" />,
            title: "Insurance",
            date: "2023-04-23T11:28:00",
            amount: -100.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $100.000</p>,
        },
        {
            id: "5",
            //   icon: <FaExchangeAlt className="text-purple-600" />,
            title: "Transfer",
            date: "2025-06-28T19:12:00",
            amount: -600.0,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $600.000</p>,
        },
        // Extras para probar scroll
        {
            id: "6",
            //   icon: <FaShoppingCart className="text-purple-600" />,
            title: "Groceries",
            date: "2023-06-02T13:20:00",
            amount: -89.5,
            currency: "$",
            total: <p className="text-red-500 font-semibold">- $89.500</p>,
        },
        {
            id: "7",
            //   icon: <FaMoneyBillWave className="text-purple-600" />,
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
                        <div className="flex items-center gap-4">
                            <Avatar
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                            <div className="flex flex-col gap-4">
                                <h2>{mainUser?.results[0].name.first}</h2>
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
                            <AvatarCarousel regularContacts={data?.results} />
                            <div className="max-h-[13rem] overflow-y-auto">
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
                                                    })}{" "}
                                                    ·{" "}
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
                            <Button color="primary">Button</Button>
                            <Button onPress={() => router.push("/transfer")} color="primary">
                                Transfer
                            </Button>
                            <Button color="primary">Button</Button>
                            <button onClick={handleLogout}>Cerrar Sesión</button>
                        </div>
                    </>
                }
            ></MainLayout>
        </>
    );
}
