import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";
import { findRandomUsers } from "@/actions/randomUsers";

export const useRandomUsers = (count: number = 10) => {
    const { setUsers } = useUserStore();

    const query = useQuery({
        queryKey: ["randomUser", count],
        queryFn: () => findRandomUsers(count),
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
