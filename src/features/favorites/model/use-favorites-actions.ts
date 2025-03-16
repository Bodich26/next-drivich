import {
  useAddToFavoritesMutation,
  useRemoveFavoritesMutation,
} from "../api/favorites-api";

export const useFavoriteActions = () => {
  const [addToFavorites, { isLoading: adding }] = useAddToFavoritesMutation();
  const [removeFromFavorites, { isLoading: removing }] =
    useRemoveFavoritesMutation();

  const toggleFavorite = async (productId: number, isFavorite: boolean) => {
    if (isFavorite) {
      await removeFromFavorites({ productId });
    } else {
      await addToFavorites({ productId });
    }
  };

  return { toggleFavorite, isLoading: adding || removing };
};
