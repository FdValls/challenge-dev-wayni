// interfaces/IRandomUserProps.ts
export interface IGoogleSSOProps {
    id: string;
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture?: string;
}
