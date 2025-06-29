"use client";

import Login from "@/components/Login/FormLogin";
import LoginLayout from "@/components/pages/home/layouts/LoginLayout";
import { Avatar } from "@heroui/react";

export default function LoginPage() {
    return (
        <LoginLayout
            headerContent={
                <div className="justify-items-center">
                    <h2 className="text-center text-3xl font-bold text-gray-900">Iniciar Sesión</h2>
                    <Avatar
                        className="h-[100px] w-[100px] my-2"
                        size="lg"
                        src="https://ayuda.waynimovil.com/hc/theming_assets/01HZPEMPTZKDV2B5NK66RJKFRT"
                    />
                </div>
            }
            bodyContent={<Login />}
        />
    );
}
