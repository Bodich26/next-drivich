"use client";

import { Button, cn, useCurrentUser, useHandleToast } from "@/shared";
import { useAddCart } from "../model/use-add-cart";
import { useRouter } from "next/navigation";
import { useGetCart } from "../model/use-get-cart";

type ButtonBuyNowProps = {
  className?: string;
  productId: number;
};

export const ButtonBuyNow = ({ className, productId }: ButtonBuyNowProps) => {
  const { cartIds } = useGetCart();
  const { showToast } = useHandleToast();
  const { addToProductCart } = useAddCart();
  const currentUser = useCurrentUser();
  const route = useRouter();

  const isAdding = cartIds.has(productId);

  const handleProductAddToCart = async () => {
    if (!isAdding) {
      const { success, error } = await addToProductCart(productId);
      if (success) {
        showToast("add", "cart");
        route.push("/cart");
      } else {
        showToast("error", "cart", error);
      }
    } else {
      route.push("/cart");
    }
  };

  const authToast = () => showToast("auth", "cart");

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={!currentUser ? authToast : handleProductAddToCart}
      className={cn(
        "font-medium text-base w-[128px] px-2 bg-transparent text-primary border-primary border-[2px]",
        className
      )}
    >
      Buy Now
    </Button>
  );
};
