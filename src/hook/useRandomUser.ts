// hooks/useRandomUser.ts - Hook personalizado con TanStack Query
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";
import { RandomUserResponseProps } from "@/interfaces/RandomUserResponseProps";

// Función para fetch de usuario aleatorio

const fetchRandomUsers = async (count: number = 10): Promise<RandomUserResponseProps> => {
    const url = `https://randomuser.me/api/?nat=us,dk,fr,gb&results=${count}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }
    return response.json();
};
const fetchRandomMainUser = async (): Promise<RandomUserResponseProps> => {
    const url = `https://randomuser.me/api/?nat=us,dk,fr,gb&results=1&seed=foobar`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch main user");
    }
    return response.json();
};

// Función para fetch de múltiples usuarios
const fetchMultipleUsers = async (
    results: number = 10,
    seed?: string,
): Promise<RandomUserResponseProps> => {
    const url = seed
        ? `https://randomuser.me/api/?results=${results}&seed=${seed}`
        : `https://randomuser.me/api/?results=${results}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

// Hook para obtener un usuario aleatorio
export const useRandomUsers = (count: number = 10) => {
    const { setUsers } = useUserStore();

    const query = useQuery({
        queryKey: ["randomUser", count],
        queryFn: () => fetchRandomUsers(count),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });

    useEffect(() => {
        if (query.data?.results.length) {
            setUsers(query.data.results);
        }
    }, [query.data, setUsers]);

    return query;
};
export const useRandomMainUser = () => {
    const query = useQuery({
        queryKey: ["randomMainUser"],
        queryFn: () => fetchRandomMainUser(),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });

    return query;
};

// Hook para obtener múltiples usuarios
export const useMultipleUsers = (results: number = 10, seed?: string) => {
    const { setUsers } = useUserStore();

    const query = useQuery({
        queryKey: ["multipleUsers", results, seed],
        queryFn: () => fetchMultipleUsers(results, seed),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });

    useEffect(() => {
        if (query.data?.results) {
            setUsers(query.data.results);
        }
    }, [query.data, setUsers]);

    return query;
};

// Hook para generar nuevo usuario (mutation)
export const useGenerateNewUser = () => {
    const queryClient = useQueryClient();
    const { setCurrentUser } = useUserStore();

    return useMutation({
        mutationFn: () => fetchRandomUsers(),
        onSuccess: (data) => {
            if (data.results.length > 0) {
                setCurrentUser(data.results[0]);
            }
            // Invalidar queries relacionadas
            queryClient.invalidateQueries({ queryKey: ["randomUser"] });
        },
    });
};
