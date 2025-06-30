"use client";

import { useAuth } from "@/hook/useAuth";
import { MainLayoutProps } from "@/interfaces/LayoutHomeProps";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function MainLayout({
    headerContent,
    bodyContent,
    footerContent,
    expanded,
    hasFooter,
}: MainLayoutProps) {
    const { isAuthenticated, isHydrated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isHydrated && !isAuthenticated) {
            router.replace("/login");
        }
    }, [isHydrated, isAuthenticated, router]);

    if (!isHydrated) return null;

    if (!isAuthenticated) return null;

    return (
        <div className="flex flex-col items-center justify-center p-4 relative w-[400px] h-[715px] xl1:h-[920px]">
            <div
                className={`w-full ${expanded ? "h-[188px]" : "h-[190px]"} xl1:h-[300px] bg-emerald-400 overflow-hidden`}
            >
                <div className="w-full bg-emerald-400 flex flex-col justify-center px-6 py-4">
                    {headerContent}
                </div>
            </div>

            <div className="w-full bg-white relative -mt-6 rounded-t-3xl z-10 shadow-lg">
                <div
                    className={`p-6 ${expanded ? "h-[600px] xl1:h-[820px]" : "h-[480px] xl1:h-[650px]"}`}
                >
                    {bodyContent}
                </div>
            </div>

            {hasFooter && (
                <div className="w-full bg-white relative -mt-6 rounded-t-2xl z-10 shadow-lg">
                    <div className="">{footerContent}</div>
                </div>
            )}
        </div>
    );
}

export default MainLayout;
