"use client";

import MainLayout from "../../components/pages/layout/MainLayout";
import ProfileData from "@/components/pages/profile/ProfileData";
import HeaderProfile from "@/components/pages/profile/HeaderProfile";
import FooterProfile from "@/components/pages/profile/FooterProfile";
export default function Profile() {
    return (
        <MainLayout
            expanded={true}
            hasFooter={true}
            headerContent={<HeaderProfile />}
            bodyContent={<ProfileData />}
            footerContent={<FooterProfile />}
        ></MainLayout>
    );
}
