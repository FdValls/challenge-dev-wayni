import { inter } from "@/config/fonts";
import { useUserStore } from "@/stores/userStore";
import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function FooterHome() {
    const router = useRouter();
    const { logout } = useUserStore();

    const handleLogout = () => {
        logout();
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
                <div className="justify-items-center cursor-pointer" onClick={handleLogout}>
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
