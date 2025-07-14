// components/GoogleSSOLogin.tsx
"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

export default function GoogleSSOLogin() {
    const googleButtonRef = useRef<HTMLDivElement>(null);
    const { currentUser, setCurrentUser } = useUserStore();
    const setAuthenticated = useUserStore.setState;
    const router = useRouter();

    const handleCredentialResponse = async (response: any) => {
        try {
            const res = await fetch("/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: response.credential }),
            });

            if (!res.ok) throw new Error("Token inválido");

            const data = await res.json();
            const { user } = data;

            console.log("User: ", user);

            setCurrentUser({
                name: { first: user.name, last: "" },
                email: user.email,
                picture: user.picture,
                id: user.id,
            });

            setAuthenticated({ isAuthenticated: user.email_verified });

            router.push("/home"); // redirigí donde quieras
        } catch (error) {
            console.error("Error al hacer login SSO:", error);
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = () => {
            (window as any).google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse,
            });

            (window as any).google.accounts.id.renderButton(googleButtonRef.current, {
                theme: "outline",
                size: "large",
                shape: "pill",
            });
        };

        document.body.appendChild(script);
    }, []);

    return <div ref={googleButtonRef} className="flex justify-center" />;
}
