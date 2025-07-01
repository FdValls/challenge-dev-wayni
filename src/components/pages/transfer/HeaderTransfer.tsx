import { inter } from "@/config/fonts";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
export default function HeaderTransfer() {
    const router = useRouter();
    return (
        <div className="flex gap-[6rem] items-center justify-items-center">
            <Icon
                onClick={() => router.back()}
                icon="icons8:left-arrow"
                className="cursor-pointer text-[18px] text-white"
            />
            <p className={`${inter.className} font-bold text-[20px] text-white`}>Transfers</p>
        </div>
    );
}
