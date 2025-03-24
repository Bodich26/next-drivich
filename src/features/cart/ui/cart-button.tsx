import { Button } from "@/shared";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCountCart } from "../model/use-count-cart";
import { ClipLoader } from "react-spinners";
import { useCartTotal } from "../model/use-cart-total";

export const CartButton = () => {
  const { count, isLoading, error } = useCountCart();
  const { totalPrices } = useCartTotal();
  return (
    <Link href="/cart">
      <Button className=" font-medium text-base" size="sm">
        {isLoading ? (
          <ClipLoader color="hsb(210 40% 98%)" size="17px" />
        ) : error ? (
          ""
        ) : (
          <>
            {totalPrices}
            <span className="block w-[1px] h-[20px] rounded-md bg-primary-foreground mt-1 mb-1"></span>
          </>
        )}
        <ShoppingBag />
        {isLoading ? (
          <ClipLoader color="hsb(210 40% 98%)" size="17px" />
        ) : error ? (
          ""
        ) : (
          count
        )}
      </Button>
    </Link>
  );
};
