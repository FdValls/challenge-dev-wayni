import { FormInput } from "@/components/form/FormInput";
import { FormTextArea } from "@/components/form/FormTextArea";
import { GenericForm } from "@/components/form/GenericForm";
import { inter } from "@/config/fonts";
import { SendAgainFormSchema } from "@/models/sendAgainSchema/SendAgainFormSchema";
import { useTempTransactionStore } from "@/stores/tempTransactionStore";
import { useUserStore } from "@/stores/userStore";
import { Avatar, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface SendAgainProps {
    amount: string;
    valueTextArea?: string | undefined;
}
export default function BodySendAgain() {
    const { selectedContact } = useUserStore();
    const { setTempTransaction } = useTempTransactionStore();
    const schema = SendAgainFormSchema;
    const router = useRouter();

    const handleSubmit = (data: SendAgainProps) => {
        if (Number(data.amount) > Number(localStorage.getItem("balance"))) {
            toast("Error, insufficient amount", {
                autoClose: 6000,
                type: "error",
                hideProgressBar: false,
                position: "top-right",
            });
        } else {
            setTempTransaction({
                amount: data.amount,
                valueTextArea: data?.valueTextArea ?? "For Food",
            });
            router.push("/resume");
        }
    };

    return (
        <div
            className={`${inter.className} flex flex-col items-center h-[25rem] xl1:h-[11rem] place-content-center`}
        >
            <div className="w-full flex flex-col items-center justify-self-center">
                <Avatar
                    size="md"
                    className={`w-[40px] h-[40px] xl1:w-[100px] xl1:h-[100px]`}
                    src={`${selectedContact?.picture.medium}`}
                />
                <div>
                    <p>{`${selectedContact?.name.first} ${selectedContact?.name.last}`}</p>
                </div>
                <div>
                    <p className={`${inter.className} font-bold text-[20px] text-[#121212]`}>
                        Set Amount
                    </p>
                </div>
                <div className="w-full xl1:h-[10rem] mt-4">
                    <GenericForm
                        schema={schema}
                        onSubmit={(data) => {
                            handleSubmit(data);
                        }}
                    >
                        <FormInput
                            className="w-full"
                            name={`amount`}
                            label="Amount"
                            type="number"
                            startContent="$"
                        />
                        <div
                            className={`flex flex-col w-full ${inter.className} font-normal text-[18px] max-h-screen`}
                        >
                            <div className="flex flex-col gap-2">
                                <p className={`text-[18px] mb-[16px]`}>Notes</p>
                                <FormTextArea name="valueTextArea" label={"For Food"} />
                            </div>
                            <Button type="submit" className="bg-emerald-400 w-full" radius="full">
                                <p
                                    className={`${inter.className} p-2 font-bold text-[18px] text-white`}
                                >
                                    Proceed to Transfer
                                </p>
                            </Button>
                        </div>
                    </GenericForm>
                </div>
            </div>
        </div>
    );
}
