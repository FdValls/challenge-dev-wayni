"use client";

import { useAuth } from "@/hook/useAuth";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormInput } from "../../form/FormInput";
import { GenericForm } from "../../form/GenericForm";
import { LoginFormSchema } from "@/models/loginSchema.ts/LoginFormSchema";
import { toast } from "react-toastify";
import { inter } from "@/config/fonts";
import { Button } from "@heroui/react";
import { ILoginFormProps } from "@/interfaces/ILoginFormProps";
import { useRandomMainUser } from "@/hook/useRandomMainUser";
import GoogleSSOLogin from "@/app/googleSSOLogin/page";

export default function Login() {
    const { isAuthenticated, isHydrated } = useAuth();
    const { data } = useRandomMainUser();
    const { login } = useUserStore();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const schema = LoginFormSchema;

    useEffect(() => {
        if (isHydrated && isAuthenticated) {
            router.replace("/home");
        }
    }, [isAuthenticated, isHydrated, router]);

    const handleSubmit = async (credentials: ILoginFormProps) => {
        setLoading(true);

        try {
            const success = login(credentials.username, credentials.password, data?.results[0]);
            if (success) {
                localStorage.setItem("user-data", JSON.stringify(data?.results[0].login.username));
                localStorage.setItem("balance", JSON.stringify(350000));
                toast("Sign in successful", {
                    autoClose: 6000,
                    type: "success",
                    hideProgressBar: false,
                    position: "top-right",
                });
            } else {
                toast("Error, invalid credentials", {
                    autoClose: 6000,
                    type: "error",
                    hideProgressBar: false,
                    position: "top-right",
                });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (!isHydrated || isAuthenticated) return null;

    return (
        <div className="max-h-screen flex-col my-4 xl1:my-10 items-center justify-center">
            <GenericForm
                schema={schema}
                onSubmit={(data) => {
                    handleSubmit(data);
                }}
            >
                <div>
                    <FormInput
                        className="w-full"
                        name={`username`}
                        label={`Username`}
                        type="text"
                    />
                </div>

                <div>
                    <FormInput
                        className="w-full"
                        name={`password`}
                        label={`Password`}
                        type="password"
                    />
                </div>

                <div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className=" w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
                    >
                        <p
                            className={`${inter.className} title-custom text-center font-bold text-white`}
                        >
                            Sign in
                        </p>
                    </Button>
                </div>
            </GenericForm>
            <div className="w-full my-4">
                <GoogleSSOLogin />
            </div>
        </div>
    );
}
