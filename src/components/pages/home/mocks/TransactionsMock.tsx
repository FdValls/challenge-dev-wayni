import { inter } from "@/config/fonts";
import { Icon } from "@iconify/react";

type TransactionProps = {
    id: string;
    icon?: React.ReactNode;
    title: string;
    date: string;
    amount: number;
    currency: string;
    total?: React.ReactNode;
};

export const transactionsMock: TransactionProps[] = [
    {
        id: "1",
        title: "Internet",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="tdesign:internet" />,
        date: "2023-05-16T17:34:00",
        amount: -24.0,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $24.000</p>,
    },
    {
        id: "2",
        title: "Transfer",
        date: "2025-06-28T19:12:00",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="ci:transfer" />,
        amount: -600.0,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $600.000</p>,
    },
    {
        id: "3",
        title: "CashIn",
        icon: (
            <Icon
                className="text-[20px] text-[#662AB2]"
                icon="streamline-freehand:cash-payment-bill"
            />
        ),
        date: "2023-05-29T19:12:00",
        amount: 260.0,
        currency: "$",
        total: <p className={`${inter.className} text-green-500 font-semibold`}>+ $260.000</p>,
    },
    {
        id: "4",
        title: "Insurance",
        icon: (
            <Icon
                className="text-[20px] text-[#662AB2]"
                icon="streamline-ultimate:insurance-hand-bold"
            />
        ),
        date: "2023-04-23T11:28:00",
        amount: -100.0,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $100.000</p>,
    },
    {
        id: "5",
        title: "Transfer",
        date: "2025-06-28T19:12:00",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="ci:transfer" />,
        amount: -600.0,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $600.000</p>,
    },
    {
        id: "6",
        title: "Groceries",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="wpf:dining-room" />,
        date: "2023-06-02T13:20:00",
        amount: -89.5,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $89.500</p>,
    },
    {
        id: "7",
        title: "Salary",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="iconoir:wallet-solid" />,
        date: "2023-06-01T08:00:00",
        amount: 1200.0,
        currency: "$",
        total: <p className={`${inter.className} text-green-500 font-semibold`}>+ $1.200.000</p>,
    },
    {
        id: "8",
        title: "Insurance",
        icon: (
            <Icon
                className="text-[20px] text-[#662AB2]"
                icon="streamline-ultimate:insurance-hand-bold"
            />
        ),
        date: "2023-04-23T11:28:00",
        amount: -100.0,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $100.000</p>,
    },
    {
        id: "9",
        title: "Transfer",
        date: "2025-06-28T19:12:00",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="ci:transfer" />,
        amount: -600.0,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $600.000</p>,
    },
    {
        id: "10",
        title: "Groceries",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="wpf:dining-room" />,
        date: "2023-06-02T13:20:00",
        amount: -89.5,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $89.500</p>,
    },
    {
        id: "11",
        title: "Salary",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="iconoir:wallet-solid" />,
        date: "2023-06-01T08:00:00",
        amount: 1200.0,
        currency: "$",
        total: <p className={`${inter.className} text-green-500 font-semibold`}>+ $1.200.000</p>,
    },
    {
        id: "12",
        title: "Groceries",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="wpf:dining-room" />,
        date: "2023-06-02T13:20:00",
        amount: -89.5,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $89.500</p>,
    },
    {
        id: "13",
        title: "Salary",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="iconoir:wallet-solid" />,
        date: "2023-06-01T08:00:00",
        amount: 1200.0,
        currency: "$",
        total: <p className={`${inter.className} text-green-500 font-semibold`}>+ $1.200.000</p>,
    },
    {
        id: "14",
        title: "Groceries",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="wpf:dining-room" />,
        date: "2023-06-02T13:20:00",
        amount: -89.5,
        currency: "$",
        total: <p className={`${inter.className} text-red-500 font-semibold`}>- $89.500</p>,
    },
    {
        id: "15",
        title: "Salary",
        icon: <Icon className="text-[20px] text-[#662AB2]" icon="iconoir:wallet-solid" />,
        date: "2023-06-01T08:00:00",
        amount: 1200.0,
        currency: "$",
        total: <p className={`${inter.className} text-green-500 font-semibold`}>+ $1.200.000</p>,
    },
];
