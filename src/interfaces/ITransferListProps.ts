import { IRandomUserProps } from "./IRandomUserProps";
import { DateValue, RangeValue } from "@heroui/react";

export interface ITransferListProps {
    userList?: IRandomUserProps[];
    dateBetween?: RangeValue<DateValue> | null | undefined;
    onResetDates?: () => void;
}
