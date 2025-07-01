import { inter } from "@/config/fonts";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function HeaderProfile() {
    const router = useRouter();

    return (
        <div className="flex gap-[7.5rem] items-center justify-items-center">
            <Icon
                onClick={() => router.back()}
                icon="icons8:left-arrow"
                fontSize={18}
                className="cursor-pointer text-white "
            />
            <p className={`${inter.className} font-bold text-[20px] text-white`}>Profile</p>
        </div>
    );
}
