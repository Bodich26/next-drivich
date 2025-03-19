import { Button, cn, useToast } from "@/shared";
import { ShoppingBag } from "lucide-react";

type ButtonAddToCartProps = {
  variant: "button" | "icon";
  className?: string;
  onClick?: () => void;
};

export const ButtonAddToCart = ({
  variant = "button",
  className,
}: ButtonAddToCartProps) => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Add to cart",
      description: "Successfully added to cart 🛒",
    });
  };

  const variants = {
    button: (
      <Button
        className={cn("font-medium text-base w-[128px] px-2", className)}
        size="sm"
        onClick={() => handleClick()}
      >
        Add to Cart
      </Button>
    ),
    icon: (
      <ShoppingBag
        width={20}
        height={20}
        className={cn("stroke-primary cursor-pointer", className)}
        onClick={() => handleClick()}
      />
    ),
  };

  return variants[variant] || null;
};
