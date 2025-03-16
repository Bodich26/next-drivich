import { useGetFavoritesQuery } from "../api/favorites-api";

export const useGetFavorites = () => {
  const { data, isLoading } = useGetFavoritesQuery();
  return {
    products: data?.items || [],
    isLoading,
    error: data?.error,
  };
};
