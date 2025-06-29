import { RandomUserProps } from "./RandomUserProps";

export interface RandomUserResponseProps {
    results: RandomUserProps[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}
