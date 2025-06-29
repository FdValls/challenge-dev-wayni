"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroUIProvider } from "@heroui/react";
import { useUserStore } from "../stores/userStore";

function ZustandHydration({ children }: { children: ReactNode }) {
    const isHydrated = useUserStore((state) => state.isHydrated);
    if (!isHydrated) return <div>Loading...</div>;
    return <>{children}</>;
}

export default function ClientProviders({ children }: { children: ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        gcTime: 10 * 60 * 1000,
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <HeroUIProvider>
                <ZustandHydration>{children}</ZustandHydration>
            </HeroUIProvider>
        </QueryClientProvider>
    );
}
