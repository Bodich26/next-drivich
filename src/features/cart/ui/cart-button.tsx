import { Button } from "@/shared";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const CartButton = () => {
  return (
    <Link href="/cart">
      <Button className=" font-medium text-base" size="sm">
        256 000 $
        <span className="block w-[1px] h-[20px] rounded-md bg-primary-foreground mt-1 mb-1"></span>
        <ShoppingBag />
        33
      </Button>
    </Link>
  );
};
