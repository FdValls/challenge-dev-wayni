import { DateValue, RangeValue } from "@heroui/react";
import { IRandomUserProps } from "./IRandomUserProps copy";

export interface ITransferListProps {
    userList?: IRandomUserProps[];
    dateBetween?: RangeValue<DateValue> | null | undefined;
    onResetDates?: () => void;
}
