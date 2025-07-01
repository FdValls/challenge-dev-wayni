import { inter } from "@/config/fonts";
import { useUserStore } from "@/stores/userStore";
import { Avatar } from "@heroui/react";
import { useRef } from "react";

export default function HeaderHome() {
    const { currentUser } = useUserStore();
    const currenBalance = useRef(localStorage.getItem("balance"));

    return (
        <div className="flex flex-col justify-items-center items-center xl1:mt-[10px]">
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <div className="flex flex-col justify-items-center items-center">
                <p className={`${inter.className} font-bold text-[32px] text-white`}>
                    {currentUser?.name.first}
                </p>
                <div>
                    <p className={`${inter.className} font-bold text-[16px] text-white`}>
                        Your Balance: ${currenBalance.current}
                    </p>
                </div>
            </div>
        </div>
    );
}
