"use client";

import SendAgainTwoLayout from "@/components/pages/sendAgainTwo/layout/SendAgainTwoLayout";
import ShowData from "@/components/pages/sendAgainTwo/ShowData";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SendAgainTwo() {
    const router = useRouter();

    return (
        <SendAgainTwoLayout
            bodyContent={
                <>
                    <ShowData />
                </>
            }
            footerContent={
                <>
                    <div className="p-2 my-2">
                        <Button
                            variant="bordered"
                            // onPress={() => router.push("/sendAgainTwo")}
                            className="bg-emerald-400 w-full border-2 border-white"
                            radius="full"
                        >
                            <p>Share</p>
                        </Button>
                    </div>
                    <div className="p-2 my-2">
                        <Button
                            onPress={() => router.push("/home")}
                            className="bg-white w-full"
                            radius="full"
                        >
                            <p>Back To Home</p>
                        </Button>
                    </div>
                </>
            }
        />
    );
}
