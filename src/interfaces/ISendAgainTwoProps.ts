import { IGoogleSSOProps } from "./IGoogleSSOProps";

export interface ISendAgainTwoProps {
    amountTotal: string | undefined;
    note: string | undefined;
    selectedContact: IGoogleSSOProps | null;
}
