"use client";

import { IMainLayoutProps } from "@/interfaces/IMainLayoutProps";

function LoginLayout({ headerContent, bodyContent }: IMainLayoutProps) {
    return (
        <div className="flex flex-col items-center justify-center p-4 relative w-[400px] h-[756px] xl1:h-[920px] max-h-screen">
            <div className="w-full h-[270px] bg-emerald-400 overflow-hidden">
                <div className=" bg-emerald-400 flex flex-col justify-center px-6 py-4">
                    {headerContent}
                </div>
            </div>

            <div className="w-full bg-white relative -mt-6 rounded-t-2xl z-10 shadow-lg">
                <div className="p-6 h-[500px] xl1:h-[650px]">{bodyContent}</div>
            </div>
        </div>
    );
}

export default LoginLayout;
