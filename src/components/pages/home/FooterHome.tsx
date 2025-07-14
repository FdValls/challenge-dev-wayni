import { inter } from "@/config/fonts";
import { useUserStore } from "@/stores/userStore";
import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function FooterHome() {
    const router = useRouter();
    const { logout, currentUser } = useUserStore();

    // const handleLogout = () => {
    //     logout();
    // };

    const logoutSSO = async (email: string | undefined, onDone: () => void) => {
        if (typeof window === "undefined") {
            console.warn("[logoutSSO] No hay window");
            return onDone();
        }

        // Validación estricta
        const google = (window as any).google;

        if (!email || !google?.accounts?.id) {
            console.warn("[logoutSSO] No se puede revocar: SDK o email faltante");
            return onDone();
        }

        try {
            google.accounts.id.revoke(email, () => {
                console.info("[logoutSSO] Sesión SSO revocada");
                onDone();
            });
        } catch (error) {
            console.error("[logoutSSO] Error al revocar sesión SSO:", error);
            onDone();
        }
    };
    return (
        <>
            <Divider className="my-2" />
            <div className="flex gap-6 items-center justify-around">
                <div
                    className="justify-items-center cursor-pointer"
                    onClick={() => router.push("/home")}
                >
                    <Icon
                        className="w-[25px] h-[25px] text-[#662AB2]"
                        icon="material-symbols:home"
                    />
                    <p className={`${inter.className} text-[14px]`}>Home</p>
                </div>
                <div
                    className="justify-items-center cursor-pointer"
                    onClick={() => router.push("/transfer")}
                >
                    <Icon className="w-[25px] h-[25px] text-[#662AB2]" icon="ci:transfer" />
                    <p className={`${inter.className} text-[14px]`}>Transfer</p>
                </div>
                <div
                    className="justify-items-center cursor-pointer"
                    onClick={() => router.push("/profile")}
                >
                    <Icon className="w-[25px] h-[25px] text-[#662AB2]" icon="iconamoon:profile" />
                    <p className={`${inter.className} text-[14px]`}>Profile</p>
                </div>
                <div
                    className="justify-items-center cursor-pointer"
                    onClick={() => {
                        logoutSSO(currentUser?.email || "", () => {
                            logout();
                            router.push("/loginWithSSO");
                        });
                    }}
                >
                    <Icon
                        className="w-[25px] h-[25px] text-[#662AB2]"
                        icon="material-symbols:logout"
                    />
                    <p className={`${inter.className} text-[14px]`}>Logout</p>
                </div>
            </div>
        </>
    );
}
