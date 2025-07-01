"use client";
import MainLayout from "../../components/pages/layout/MainLayout";
import HeaderTransfer from "@/components/pages/transfer/HeaderTransfer";
import BodyTransfer from "@/components/pages/transfer/BodyTransfer";
export default function Transfer() {
    return (
        <MainLayout
            expanded={true}
            hasFooter={false}
            headerContent={<HeaderTransfer />}
            bodyContent={<BodyTransfer />}
        ></MainLayout>
    );
}
