import { RandomUserProps } from "./RandomUserProps";

export interface UserStateProps {
    currentUser: RandomUserProps | null;
    users: RandomUserProps[];
    isHydrated: boolean;
    isAuthenticated: boolean; // Nuevo campo
    setCurrentUser: (user: RandomUserProps) => void;
    setUsers: (users: RandomUserProps[]) => void;
    clearCurrentUser: () => void;
    setHydrated: () => void;
    login: (username: string, password: string, userToCheck?: RandomUserProps) => boolean; // Función actualizada
    logout: () => void; // Nueva función
}
