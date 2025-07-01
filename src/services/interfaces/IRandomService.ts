import { IRandomUserResponseProps } from "@/interfaces/IRandomUserResponseProps";

export interface IRandomService {
    findRandomMainUser(): Promise<IRandomUserResponseProps>;
    findRandomUsers(count: number): Promise<IRandomUserResponseProps>;
}
