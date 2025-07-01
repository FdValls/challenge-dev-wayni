"use client";
import MainLayout from "../../components/pages/layout/MainLayout";
import HeaderHome from "@/components/pages/home/HeaderHome";
import BodyHome from "@/components/pages/home/BodyHome";
import FooterHome from "@/components/pages/home/FooterHome";

export default function Home() {
    return (
        <>
            <MainLayout
                hasFooter={true}
                headerContent={<HeaderHome />}
                bodyContent={<BodyHome />}
                footerContent={<FooterHome />}
            ></MainLayout>
        </>
    );
}
