import { create } from "zustand";

type TempTransactionState = {
    amount: string;
    valueTextArea: string;
    nameUserTransfer: string;
    lastNameUserTransfer: string;
    setTempTransaction: (data: {
        amount: string;
        valueTextArea: string;
        nameUserTransfer?: string;
        lastNameUserTransfer?: string;
    }) => void;
    resetTempTransaction: () => void;
};

export const useTempTransactionStore = create<TempTransactionState>((set) => ({
    amount: "",
    valueTextArea: "",
    nameUserTransfer: "",
    lastNameUserTransfer: "",
    setTempTransaction: ({ amount, valueTextArea, lastNameUserTransfer, nameUserTransfer }) =>
        set({ amount, valueTextArea, lastNameUserTransfer, nameUserTransfer }),
    resetTempTransaction: () => set({ amount: "", valueTextArea: "" }),
}));
