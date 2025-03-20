import { Button, cn, useCurrentUser, useToast } from "@/shared";
import { ShoppingBag } from "lucide-react";
import { useAddCart } from "../model/use-add-cart";
import { useGetCart } from "../model/use-get-cart";

type ButtonAddToCartProps = {
  variant: "button" | "icon";
  className?: string;
  productId: number;
};

export const ButtonAddToCart = ({
  variant = "button",
  className,
  productId,
}: ButtonAddToCartProps) => {
  const { cartIds, isLoading } = useGetCart();
  const { toast } = useToast();
  const { addToProductCart } = useAddCart();
  const currentUser = useCurrentUser();
  const isAdding = isLoading ? true : cartIds.has(productId);

  const handleProductAddToCart = async () => {
    const { success, error } = await addToProductCart(productId);

    if (success) {
      toast({
        title: "Add to cart",
        description: "Successfully added to cart 🛒",
      });
    } else {
      toast({
        title: "Went wrong cart",
        description:
          String(error) || "Oops, something went wrong. Try again later",
        variant: "destructive",
      });
    }
  };

  const handleToastNoLogin = () => {
    toast({
      title: "Authorization required",
      description: "Please log in to manage your cart",
      variant: "destructive",
    });
  };

  const variants = {
    button: (
      <Button
        className={cn(
          "font-medium text-base w-[128px] px-2",
          className,
          isAdding && "opacity-50 cursor-not-allowed"
        )}
        size="sm"
        onClick={!currentUser ? handleToastNoLogin : handleProductAddToCart}
      >
        {isAdding ? "In Cart" : "Add to Cart"}
      </Button>
    ),
    icon: (
      <ShoppingBag
        width={20}
        height={20}
        className={cn(
          "stroke-primary cursor-pointer",
          className,
          isAdding && "opacity-50 cursor-not-allowed"
        )}
        onClick={!currentUser ? handleToastNoLogin : handleProductAddToCart}
      />
    ),
  };

  return variants[variant] || null;
};
