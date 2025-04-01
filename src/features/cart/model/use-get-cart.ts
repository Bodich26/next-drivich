import { useGetCartQuery } from "../api/cart-api";
import { useCurrentUser } from "@/shared";

export const useGetCart = () => {
  const currentUser = useCurrentUser();
  const { data, isLoading, error } = useGetCartQuery(undefined, {
    skip: !currentUser,
  });

  const cartIds = new Set(data?.items.map((p) => p.id) || []);

  return {
    products: data?.items || [],
    isLoading,
    error: error && "Server Error",
    cartIds,
  };
};
