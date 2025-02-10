import { Button, cn } from "@/shared";
import { ShoppingBag } from "lucide-react";

type ButtonAddToCartProps = {
  variant: "button" | "icon";
  className?: string;
  onClick?: () => void;
};

export const ButtonAddToCart = ({
  variant = "button",
  className,
  onClick,
}: ButtonAddToCartProps) => {
  const variants = {
    button: (
      <Button
        className={cn("font-medium text-base w-[128px] px-2", className)}
        size="sm"
        onClick={onClick}
      >
        Add to Cart
      </Button>
    ),
    icon: (
      <ShoppingBag
        width={20}
        height={20}
        className={cn("stroke-primary cursor-pointer", className)}
        onClick={onClick}
      />
    ),
  };

  return variants[variant] || null;
};
