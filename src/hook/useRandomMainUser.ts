import { findRandomMainUser } from "@/actions/randomUsers";
import { useQuery } from "@tanstack/react-query";

export const useRandomMainUser = () => {
    const query = useQuery({
        queryKey: ["randomMainUser"],
        queryFn: () => findRandomMainUser(),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
    });

    return query;
};
