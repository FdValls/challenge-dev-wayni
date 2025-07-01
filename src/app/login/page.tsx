"use client";

import Login from "@/components/pages/login/FormLogin";
import HeaderLogin from "@/components/pages/login/HeaderLogin";
import LoginLayout from "@/components/pages/login/layout/LoginLayout";

export default function LoginPage() {
    return <LoginLayout headerContent={<HeaderLogin />} bodyContent={<Login />} />;
}
