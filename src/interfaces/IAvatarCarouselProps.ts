import { Dispatch, SetStateAction } from "react";
import { IRandomUserProps } from "./IRandomUserProps";

export interface IAvatarCarouselProps {
    setSelectedcontact: Dispatch<SetStateAction<IRandomUserProps | undefined>>;
}
