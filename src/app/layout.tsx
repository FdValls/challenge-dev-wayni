import "@/styles/globals.css";
import ClientProviders from "../providers/ClientProviders";
import ProtectedRoute from "@/wrappers/ProtectedRoute";
import { ToastContainer } from "react-toastify";

export const metadata = {
    title: "WayniWallet",
    description: "Challenge for Frontend developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <body>
                <ProtectedRoute>
                    <ClientProviders>{children}</ClientProviders>
                </ProtectedRoute>
                <ToastContainer />
            </body>
        </html>
    );
}
