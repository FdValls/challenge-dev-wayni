"use client";

import { ReactNode } from "react";

export interface IResumeProps {
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
    footerContent?: ReactNode;
    expanded?: boolean;
    hasFooter?: boolean;
}
