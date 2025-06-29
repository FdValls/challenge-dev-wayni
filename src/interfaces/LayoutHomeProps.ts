import { ReactNode } from "react";

export interface MainLayoutProps {
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
    footerContent?: ReactNode;
    expanded?: boolean;
}
