import { IRandomUserProps } from "@/interfaces/IRandomUserProps";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
    currentUser: IRandomUserProps | null;
    users: IRandomUserProps[];
    selectedContact: IRandomUserProps | null;
    isHydrated: boolean;
    isAuthenticated: boolean;
    setCurrentUser: (user: IRandomUserProps) => void;
    setSelectedContact: (contact: IRandomUserProps) => void;
    setUsers: (users: IRandomUserProps[]) => void;
    clearCurrentUser: () => void;
    setHydrated: () => void;
    // login: (username: string, password: string, userToCheck?: IRandomUserProps) => boolean;
    logout: () => void;
};

const excludeField = (obj: any, field: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [field]: _, ...rest } = obj;
    return rest;
};

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            currentUser: null,
            users: [],
            selectedContact: null,
            isHydrated: false,
            isAuthenticated: false,
            setCurrentUser: (user) => set({ currentUser: user }),
            setSelectedContact: (contact) => set({ selectedContact: contact }),
            setUsers: (users) => set({ users }),
            clearCurrentUser: () => set({ currentUser: null, isAuthenticated: false }),
            setHydrated: () => set({ isHydrated: true }),
            // login: (username: string, password: string, userToCheck?: IRandomUserProps) => {
            //     if (
            //         userToCheck?.login.username === username &&
            //         userToCheck?.login.password === password
            //     ) {
            //         set({
            //             currentUser: userToCheck,
            //             isAuthenticated: true,
            //         });
            //         return true;
            //     }
            //     return false;
            // },
            logout: () => {
                set({
                    currentUser: null,
                    isAuthenticated: false,
                    users: [],
                    isHydrated: true,
                });

                localStorage.removeItem("user-storage");
                localStorage.removeItem("balance");
                localStorage.removeItem("user-data");
                localStorage.removeItem("listTransfer");
            },
        }),
        {
            name: "user-storage",
            partialize: (state) => ({
                currentUser: state.currentUser,
                selectedContact: state.selectedContact,
                users: state.users.map((user) => excludeField(user, "login")),
                isAuthenticated: state.isAuthenticated,
            }),
            onRehydrateStorage: () => (state) => {
                // const user = state?.currentUser;
                const isValid = state?.isAuthenticated;

                if (!isValid) {
                    state?.logout();
                } else {
                    state?.setHydrated();
                }
            },
            version: 1.0,
        },
    ),
);
