import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export const useAuth = () => {
    const { isAuthenticated, currentUser, isHydrated } = useUserStore();
    return {
        isAuthenticated,
        currentUser,
        isHydrated,
        isLoading: !isHydrated,
    };
};
