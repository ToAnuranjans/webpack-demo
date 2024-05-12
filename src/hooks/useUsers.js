import React from "react";
import { useQuery } from "../product-query";
import { getUsers } from "../api/placeholder-service";

export function useAlbums() {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers()
    });
}
