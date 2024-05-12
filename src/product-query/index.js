import React from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';
import ProductQueryProvider, { queryClient } from "./product-query-provider";

export { ProductQueryProvider, queryClient, useQueryClient, useQuery, useMutation };
