"use client";

import { ProductDate } from "@/entities";
import { ButtonCloseFavorites } from "@/features";
import {
  DecorLine,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shared";
import { ProductList } from "@/widgets";
import React from "react";
interface FavoritesDrawerProps {
  children: React.ReactNode;
}

export const FavoritesDrawer = ({ children }: FavoritesDrawerProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {children}
      <SheetContent className="w-[294px] h-full flex flex-col p-4">
        <SheetHeader>
          <SheetTitle className="font-bold text-2xl">Favorites</SheetTitle>
          <DecorLine />
        </SheetHeader>
        <ProductList
          className="px-2"
          products={ProductDate}
          variant="favorites"
        />
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
