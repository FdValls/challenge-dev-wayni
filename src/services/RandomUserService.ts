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

        const [data] = await Promise.all([
            fetch(url).then(async (response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                return response.json();
            }),
            /* Este setTimeout lo puse para simular un retardo en la lista de contactos de home
            y poder mostrar el Skeleton
            */
            new Promise((resolve) => setTimeout(resolve, 2000)),
        ]);

        return data;
    };
}
