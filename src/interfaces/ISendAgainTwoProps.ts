import { IRandomUserProps } from "./IRandomUserProps";

export interface ISendAgainTwoProps {
    amountTotal: string | undefined;
    note: string | undefined;
    selectedContact: IRandomUserProps | null;
}
