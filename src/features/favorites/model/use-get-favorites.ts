import { useCurrentUser } from "@/shared";
import { useGetFavoritesQuery } from "../api/favorites-api";

export const useGetFavorites = () => {
  const currentUser = useCurrentUser();

  const { data, isLoading } = useGetFavoritesQuery(undefined, {
    skip: !currentUser,
  });

  const favoriteIds = new Set(data?.items.map((p) => p.id) || []);

  return {
    products: data?.items || [],
    isLoading,
    error: data?.error,
    favoriteIds,
  };
};
