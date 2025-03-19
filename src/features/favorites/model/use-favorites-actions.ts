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

  const toggleFavorite = async (
    productId: number,
    isFavorite: boolean
  ): Promise<{ success: boolean; error: unknown }> => {
    if (!currentUser) {
      return { success: false, error: "User is not Login" };
    }

    try {
      if (isFavorite) {
        await removeFromFavorites({ productId }).unwrap();
      } else {
        await addToFavorites({ productId }).unwrap();
      }
      return { success: true, error: null };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };

  return { toggleFavorite, isLoading: adding || removing };
};
