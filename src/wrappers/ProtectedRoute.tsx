"use client";

import { useAuth } from "@/hook/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
            // router.push("/googleSSOLogin");
        }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) return null;

    return <>{children}</>;
}
