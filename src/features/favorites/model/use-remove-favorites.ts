import { useCurrentUser } from "@/shared";
import { useRemoveFavoritesMutation } from "../api/favorites-api";

export const useRemoveFavorites = () => {
  const [removeFromFavorites, { isLoading: removing }] =
    useRemoveFavoritesMutation();
  const currentUser = useCurrentUser();

  const removeProductFromFavorites = async (
    productId: number
  ): Promise<{ success: boolean; error: unknown }> => {
    if (!currentUser) {
      return { success: false, error: "User is not Login" };
    }
    try {
      await removeFromFavorites({ productId }).unwrap();
      return { success: true, error: null };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };

  return { removeProductFromFavorites, isLoading: removing };
};
