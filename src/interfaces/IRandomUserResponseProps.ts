import { IRandomUserProps } from "./IRandomUserProps copy";

export interface IRandomUserResponseProps {
    results: IRandomUserProps[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}
