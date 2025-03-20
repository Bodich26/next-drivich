import { useCurrentUser } from "@/shared";
import { useAddToCartMutation } from "../api/cart-api";

export const useAddCart = () => {
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const currentUser = useCurrentUser();

  const addToProductCart = async (
    productId: number
  ): Promise<{ success: boolean; error: unknown }> => {
    if (!currentUser) {
      return { success: false, error: "User is not Login" };
    }

    try {
      const response = await addToCart({ productId }).unwrap();
      if (!response.success) {
        return { success: false, error: response.error || "Unknown error" };
      }
      return { success: true, error: response.error };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };
  return { addToProductCart, isLoading };
};
