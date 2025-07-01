import { inter } from "@/config/fonts";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
export default function FooterSendAgainTwo() {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-4 p-0 mt-8">
            <Button
                variant="bordered"
                className={`bg-emerald-400 w-full border-2 border-white`}
                radius="full"
            >
                <p className={`font-bold text-white text-[18px]`}>Share</p>
            </Button>
            <Button onPress={() => router.push("/home")} className="bg-white w-full" radius="full">
                <p className={`${inter.className} p-2 font-bold text-[18px] text-emerald-400`}>
                    Back To Home
                </p>
            </Button>
        </div>
    );
}
