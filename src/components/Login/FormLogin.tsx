"use client";

import { useAuth } from "@/hook/useAuth";
import { useRandomMainUser } from "@/hook/useRandomUser";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
    const { isAuthenticated, isHydrated } = useAuth();
    const { data } = useRandomMainUser();
    const { login } = useUserStore();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isHydrated && isAuthenticated) {
            router.replace("/home");
        }
    }, [isAuthenticated, isHydrated, router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const success = login(username, password, data?.results[0]);
            if (success) {
                localStorage.setItem("user-data", JSON.stringify(data?.results[0].login.username));
                localStorage.setItem("balance", JSON.stringify(350000));
            } else {
                alert("Credenciales inválidas");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (!isHydrated || isAuthenticated) return <p>Loading...</p>;

    return (
        <div className="min-h-screen flex-col my-4 items-center justify-center">
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </button>
            </form>
        </div>
    );
}
