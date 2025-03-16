"use client";
import { useGetFavoritesQuery } from "../api/favorites-api";

export const useCountFavorites = () => {
  const { data, isLoading, error } = useGetFavoritesQuery();
  return { count: data?.items.length || 0, isLoading, error };
};
