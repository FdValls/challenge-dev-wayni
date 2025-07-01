"use client";

import { IMainLayoutProps } from "@/interfaces/IMainLayoutProps";

function SendAgainTwoLayout({ bodyContent, footerContent }: IMainLayoutProps) {
    return (
        <div className="flex flex-col items-center justify-center max-h-screen p-4">
            <div className="w-[400px] h-[756px] xl1:h-[920px] bg-emerald-400 overflow-hidden ">
                <div className="mx-6 mt-8 bg-white rounded-2xl overflow-hidden shadow-sm flex-1 mb-2">
                    <div className="p-6 h-[530px] xl1:h-[730px]">{bodyContent}</div>
                </div>

                <div className="px-6 pb-8 ">{footerContent}</div>
            </div>
        </div>
    );
}

export default SendAgainTwoLayout;
