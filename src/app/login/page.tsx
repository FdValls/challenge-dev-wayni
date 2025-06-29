"use client";

import Login from "@/components/login/FormLogin";
import LoginLayout from "@/components/pages/login/layout/LoginLayout";
import { Avatar } from "@heroui/react";

export default function LoginPage() {
    return (
        <LoginLayout
            headerContent={
                <div className="justify-items-center">
                    <Avatar
                        className="h-[145px] w-[145px] mb-2"
                        size="lg"
                        src="https://ayuda.waynimovil.com/hc/theming_assets/01HZPEMPTZKDV2B5NK66RJKFRT"
                    />
                </div>
            }
            bodyContent={<Login />}
        />
    );
}
