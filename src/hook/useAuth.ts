import { useUserStore } from "@/stores/userStore";

export const useAuth = () => {
    const { isAuthenticated, currentUser, isHydrated } = useUserStore();
    return {
        isAuthenticated,
        currentUser,
        isHydrated,
        isLoading: !isHydrated,
    };
};
