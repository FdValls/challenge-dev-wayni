"use client";

import { MainLayoutProps } from "@/interfaces/LayoutHomeProps";

function SendAgainTwoLayout({ headerContent, bodyContent, footerContent }: MainLayoutProps) {
    return (
        <div className="flex flex-col items-center justify-center  max-h-screen p-4">
            {/* Mobile Container */}
            <div className="w-[400px] h-[570px] bg-emerald-400 overflow-hidden ">
                {/* Main Content Card */}
                <div className="mx-6 mt-8 bg-white rounded-2xl overflow-hidden shadow-sm flex-1 mb-6">
                    <div className="p-6 h-[350px]">{bodyContent}</div>
                </div>

                {/* Bottom Action Area */}
                <div className="px-6 pb-8 space-y-3">{footerContent}</div>
            </div>
        </div>
    );
}

export default SendAgainTwoLayout;
