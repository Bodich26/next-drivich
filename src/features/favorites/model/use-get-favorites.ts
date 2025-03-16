import { useGetFavoritesQuery } from "../api/favorites-api";

export const useGetFavorites = () => {
  const { data, isLoading } = useGetFavoritesQuery();

  const favoriteIds = new Set(data?.items.map((p) => p.id) || []);

  return {
    products: data?.items || [],
    isLoading,
    error: data?.error,
    favoriteIds,
  };
};
