import { inter } from "@/config/fonts";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function HeaderSendAgain() {
    const router = useRouter();
    const currenAmount = useRef(localStorage.getItem("balance"));

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-[5.5rem] items-center">
                <Icon
                    onClick={() => router.back()}
                    icon="icons8:left-arrow"
                    className="cursor-pointer text-[18px] text-white"
                />
                <p className={`${inter.className} font-bold text-[20px] text-white`}>Send Again</p>
            </div>
            <div
                className={`flex flex-col gap-4 ${inter.className} font-light text-[14px] text-white`}
            >
                <div className="flex flex-col items-center">
                    <p>Your Balance:</p>
                    <p className="font-bold text-[24px]">${currenAmount.current}</p>
                </div>
            </div>
        </div>
    );
}
