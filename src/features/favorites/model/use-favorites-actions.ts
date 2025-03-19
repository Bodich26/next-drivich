import { useCurrentUser } from "@/shared/hooks";
import {
  useAddToFavoritesMutation,
  useRemoveFavoritesMutation,
} from "../api/favorites-api";

export const useFavoriteActions = () => {
  const [addToFavorites, { isLoading: adding }] = useAddToFavoritesMutation();
  const [removeFromFavorites, { isLoading: removing }] =
    useRemoveFavoritesMutation();
  const currentUser = useCurrentUser();

  const toggleFavorite = async (productId: number, isFavorite: boolean) => {
    if (!currentUser) return false;

    if (isFavorite) {
      await removeFromFavorites({ productId });
    } else {
      await addToFavorites({ productId });
    }
    return true;
  };

  return { toggleFavorite, isLoading: adding || removing };
};
