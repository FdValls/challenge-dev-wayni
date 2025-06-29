import { RandomUserProps } from "./RandomUserProps";

export interface UserStateProps {
    currentUser: RandomUserProps | null;
    selectedContact: RandomUserProps | null;
    users: RandomUserProps[];
    isHydrated: boolean;
    isAuthenticated: boolean;
    setCurrentUser: (user: RandomUserProps) => void;
    setSelectedContact: (contact: RandomUserProps) => void;
    setUsers: (users: RandomUserProps[]) => void;
    clearCurrentUser: () => void;
    setHydrated: () => void;
    login: (username: string, password: string, userToCheck?: RandomUserProps) => boolean;
    logout: () => void;
}
