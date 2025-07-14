// interfaces/IRandomUserProps.ts
export interface IRandomUserProps {
    id: string;
    name: {
        first: string;
        last: string;
    };
    login?: {
        username: string;
        password: string;
    };
    email: string;
    picture?: string;
}
