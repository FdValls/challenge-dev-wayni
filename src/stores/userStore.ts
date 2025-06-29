import { RandomUserProps } from "@/interfaces/RandomUserProps";
import { UserStateProps } from "@/interfaces/UserStateProps";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create<UserStateProps>()(
    persist(
        (set) => ({
            currentUser: null,
            users: [],
            isHydrated: false,
            isAuthenticated: false,

            setCurrentUser: (user) => set({ currentUser: user }),

            setUsers: (users) => set({ users }),

            clearCurrentUser: () => set({ currentUser: null, isAuthenticated: false }),

            setHydrated: () => set({ isHydrated: true }),

            login: (username: string, password: string, userToCheck?: RandomUserProps) => {
                if (
                    userToCheck?.login.username === username &&
                    userToCheck?.login.password === password
                ) {
                    set({
                        currentUser: userToCheck,
                        isAuthenticated: true,
                    });
                    return true;
                }
                return false;
            },

            logout: () => {
                set({
                    currentUser: null,
                    isAuthenticated: false,
                    users: [],
                    isHydrated: true,
                });

                localStorage.removeItem("user-storage");
            },
        }),
        {
            name: "user-storage",
            partialize: (state) => ({
                currentUser: state.currentUser,
            }),
            onRehydrateStorage: () => (state) => {
                state?.setHydrated();
            },
            version: 1.0,
        },
    ),
);
