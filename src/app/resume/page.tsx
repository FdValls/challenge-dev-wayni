"use client";

import FooterResume from "@/components/pages/resume/FooterSendAgainTwo";
import ResumeLayout from "@/components/pages/resume/layout/ResumeLayout";
import ShowData from "@/components/pages/resume/ShowData";

export default function Resume() {
    return <ResumeLayout bodyContent={<ShowData />} footerContent={<FooterResume />} />;
}
