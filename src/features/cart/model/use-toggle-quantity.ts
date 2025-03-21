import { useCurrentUser } from "@/shared";
import {
  useRemoveFromCartMutation,
  useUpCartQuantityMutation,
} from "../api/cart-api";

export const useToggleQuantity = () => {
  const [removeFromCart] = useRemoveFromCartMutation();
  const [upCartQuantity] = useUpCartQuantityMutation();
  const currentUser = useCurrentUser();

  const toggleQuantity = async (
    productId: number,
    quantity: number
  ): Promise<{ success: boolean; error?: unknown }> => {
    if (!currentUser) {
      return { success: false, error: "User is not Login" };
    }

    try {
      if (quantity < 1) {
        await removeFromCart({ productId }).unwrap();
        return { success: true };
      }
      if (quantity <= 10) {
        await upCartQuantity({ productId, quantity }).unwrap();
        return { success: true };
      }
      return { success: false, error: "Max quantity is 10" };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };

  return { toggleQuantity };
};
