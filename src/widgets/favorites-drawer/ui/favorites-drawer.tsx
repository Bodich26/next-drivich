import { ProductDate } from "@/entities";
import {
  Button,
  DecorLine,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shared";
import { ProductList } from "@/widgets";
interface FavoritesDrawerProps {
  children: React.ReactNode;
}

export const FavoritesDrawer = ({ children }: FavoritesDrawerProps) => {
  return (
    <Sheet>
      {children}
      <SheetContent className="w-[294px] h-full flex flex-col p-5">
        <SheetHeader>
          <SheetTitle className="font-bold text-2xl">Favorites</SheetTitle>
          <DecorLine />
        </SheetHeader>

        <ProductList products={ProductDate} variant="favorites" />
        <Button variant="secondary" className="w-full">
          Clear All
        </Button>
      </SheetContent>
    </Sheet>
  );
};
