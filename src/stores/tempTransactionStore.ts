import { create } from "zustand";

type TempTransactionState = {
    amount: string;
    valueTextArea: string;
    setTempTransaction: (data: { amount: string; valueTextArea: string }) => void;
    resetTempTransaction: () => void;
};

export const useTempTransactionStore = create<TempTransactionState>((set) => ({
    amount: "",
    valueTextArea: "",
    setTempTransaction: ({ amount, valueTextArea }) => set({ amount, valueTextArea }),
    resetTempTransaction: () => set({ amount: "", valueTextArea: "" }),
}));
