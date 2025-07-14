import { Dispatch, SetStateAction } from "react";
import { IGoogleSSOProps } from "./IGoogleSSOProps";

export interface IAvatarCarouselProps {
    setSelectedcontact: Dispatch<SetStateAction<IGoogleSSOProps | undefined>>;
}
