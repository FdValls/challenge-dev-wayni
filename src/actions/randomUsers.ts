import { IRandomService } from "@/services/interfaces/IRandomService";
import { RandomService } from "@/services/RandomUserService";

const randomUsers: IRandomService = new RandomService();

export const findRandomUsers = async (count: number) => {
    return await randomUsers.findRandomUsers(count);
};
export const findRandomMainUser = async () => {
    return await randomUsers.findRandomMainUser();
};
