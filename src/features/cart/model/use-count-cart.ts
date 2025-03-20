"use client";

import { useGetCartQuery } from "../api/cart-api";

export const useCountCart = () => {
  const { data, isLoading, error } = useGetCartQuery();
  return { count: data?.items.length || "", isLoading, error };
};
