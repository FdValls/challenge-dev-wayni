import { inter } from "@/config/fonts";
import { transactionsMock } from "./mocks/TransactionsMock";
import AvatarCarousel from "@/components/avatarCarousel/AvatarCarousel";
import { useEffect, useState } from "react";
import { IGoogleSSOProps } from "@/interfaces/IGoogleSSOProps";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

export default function BodyHome() {
    const { setSelectedContact } = useUserStore();
    const router = useRouter();
    const [selectedContact, setSelectedcontact] = useState<IGoogleSSOProps>();

    useEffect(() => {
        if (selectedContact) {
            setSelectedContact(selectedContact);
            router.push("/sendAgain");
        }
    }, [setSelectedcontact, selectedContact, setSelectedContact, router]);

    return (
        <div>
            <div>
                <p className={`title-section ${inter.className} text-center`}>Send Again</p>
                <AvatarCarousel setSelectedcontact={setSelectedcontact} />
            </div>
            <p className={`title-section ${inter.className} text-center`}>Lastest Transaction</p>
            <div className="max-h-[13rem] xl1:max-h-[26rem] overflow-y-auto">
                {transactionsMock.map((tx) => (
                    <div
                        key={tx.id}
                        className="flex items-center justify-between pr-4 py-2 border-b"
                    >
                        <div className="flex items-center space-x-3">
                            {tx.icon}
                            <div>
                                <p className={`${inter.className} font-normal text-[18px]`}>
                                    {tx.title}
                                </p>
                                <p
                                    className={`${inter.className} font-extralight text-[14px] text-[#999999]`}
                                >
                                    {new Date(tx.date).toLocaleString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                    {new Date(tx.date).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            </div>
                        </div>
                        {tx.total}
                    </div>
                ))}
            </div>
        </div>
    );
}
