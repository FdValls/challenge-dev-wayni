import { IRandomUserResponseProps } from "@/interfaces/IRandomUserResponseProps";
import { IRandomService } from "./interfaces/IRandomService";

export class RandomService implements IRandomService {
    findRandomMainUser = async (): Promise<IRandomUserResponseProps> => {
        const url = `https://randomuser.me/api/?nat=us,dk,fr,gb&results=1&seed=foobar`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch main user");
        }
        return response.json();
    };

    findRandomUsers = async (count: number = 10): Promise<IRandomUserResponseProps> => {
        const url = `https://randomuser.me/api/?nat=us,dk,fr,gb&results=${count}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        return new Promise<IRandomUserResponseProps>((resolve) => {
            setTimeout(() => resolve(data), 2000);
        });
    };
}
