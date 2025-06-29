import { RandomUserProps } from "./RandomUserProps";
import { DateValue, RangeValue } from "@heroui/react";

export interface TransferListProps {
    userList?: RandomUserProps[];
    dateBetween?: RangeValue<DateValue> | null | undefined;
    onResetDates?: () => void;
}
