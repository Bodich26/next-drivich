"use client";
import React from "react";
import { ButtonCloseFavorites } from "@/features";
import {
  DecorLine,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SkeletonProduct,
} from "@/shared";
import { DisplayLoadingErrors, ProductList } from "@/widgets";
import { useGetFavorites } from "@/features/favorites/model/use-get-favorites";

interface FavoritesDrawerProps {
  children: React.ReactNode;
}

export const FavoritesDrawer = ({ children }: FavoritesDrawerProps) => {
  const { products, isLoading, error } = useGetFavorites();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {children}
      <SheetContent className="w-[294px] h-full flex flex-col p-4 justify-between">
        <SheetHeader>
          <SheetTitle className="font-bold text-2xl">Favorites</SheetTitle>
          <DecorLine />
        </SheetHeader>
        {isLoading ? (
          <SkeletonProduct variant="favorites" />
        ) : error ? (
          <DisplayLoadingErrors entities="favorites" error={error} />
        ) : (
          <ProductList
            className="px-2"
            products={products}
            variant="favorites"
          />
        )}
        <div>
          <DecorLine />
          <ButtonCloseFavorites
            className="mt-1"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
