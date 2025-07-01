"use client";

import FooterSendAgainTwo from "@/components/pages/sendAgainTwo/FooterSendAgainTwo";
import SendAgainTwoLayout from "@/components/pages/sendAgainTwo/layout/SendAgainTwoLayout";
import ShowData from "@/components/pages/sendAgainTwo/ShowData";

export default function SendAgainTwo() {
    return <SendAgainTwoLayout bodyContent={<ShowData />} footerContent={<FooterSendAgainTwo />} />;
}
