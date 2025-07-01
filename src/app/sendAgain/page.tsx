"use client";

import MainLayout from "@/components/pages/layout/MainLayout";
import BodySendAgain from "@/components/pages/sendAgain/BodySendAgain";
import HeaderSendAgain from "@/components/pages/sendAgain/HeaderSendAgain";

export default function SendAgain() {
    return (
        <>
            <MainLayout
                hasFooter={false}
                expanded={false}
                headerContent={<HeaderSendAgain />}
                bodyContent={<BodySendAgain />}
            />
        </>
    );
}
