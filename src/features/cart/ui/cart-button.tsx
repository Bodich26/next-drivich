import { Button, DecorLine } from "@/shared";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const CartButton = () => {
  return (
    <Link href="/cart">
      <Button className=" font-medium text-base" size="sm">
        256 000 $
        <DecorLine />
        <ShoppingBag />
        33
      </Button>
    </Link>
  );
};
