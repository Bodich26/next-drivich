"use client";
import React from "react";
import { Heart } from "lucide-react";
import { cn, useToast } from "@/shared";
import { useFavoriteActions } from "../model/use-favorites-actions";
import { useGetFavorites } from "../model/use-get-favorites";

interface IProps {
  variant: "hover" | "static";
  productId: number;
}

export const ButtonToggleFavorites = ({ variant, productId }: IProps) => {
  const { favoriteIds } = useGetFavorites();
  const { toggleFavorite } = useFavoriteActions();
  const { toast } = useToast();
  const isFavorite = favoriteIds.has(productId);

  const handleClick = async () => {
    const success = await toggleFavorite(productId, isFavorite);

    toast({
      title: success ? "Add to favorites" : "Not added to favorites",
      description: success
        ? "Successfully added to favorites"
        : "Log in to your account",
    });
  };

  if (variant === "hover") {
    return (
      <Heart
        onClick={() => handleClick()}
        width={32}
        height={32}
        className={cn(
          "block stroke-primary absolute opacity-0 left-[12px] top-[12px] invisible group-hover:opacity-100 group-hover:visible cursor-pointer transition-all duration-300 ease-in-out",
          isFavorite ? "fill-primary visible opacity-100" : "fill-transparent"
        )}
      />
    );
  }
  if (variant === "static") {
    return (
      <Heart
        onClick={() => handleClick()}
        width={32}
        height={32}
        className={cn(
          "block stroke-primary hover:cursor-pointer transition-all duration-300 ease-in-out",
          isFavorite ? "fill-primary" : "fill-transparent"
        )}
      />
    );
  }

  return null;
};
