"use client";
import React from "react";
import { Heart } from "lucide-react";
import { cn, useCurrentUser, useToast } from "@/shared";
import { useFavoriteActions } from "../model/use-favorites-actions";
import { useGetFavorites } from "../model/use-get-favorites";

interface IProps {
  variant: "hover" | "static";
  productId: number;
}

export const ButtonToggleFavorites = ({ variant, productId }: IProps) => {
  const { favoriteIds, isLoading } = useGetFavorites();
  const { toggleFavorite } = useFavoriteActions();
  const { toast } = useToast();
  const [isCooldown, setIsCooldown] = React.useState<boolean>(false);
  const isFavorite = favoriteIds.has(productId);
  const currentUser = useCurrentUser();

  const handleClick = async () => {
    if (isCooldown) return;

    setIsCooldown(true);
    const { success, error } = await toggleFavorite(productId, isFavorite);

    if (success) {
      toast({
        title: isFavorite ? "Removed from favorites" : "Added to favorites",
        description: isFavorite
          ? "Successfully removed ❤️"
          : "Successfully added ❤️",
      });
    } else {
      toast({
        title: "Went wrong favorites",
        description:
          String(error) || "Oops, something went wrong. Try again later",
        variant: "destructive",
      });
    }

    setTimeout(() => setIsCooldown(false), 5000);
  };

  const handleToastNoLogin = () => {
    toast({
      title: "Authorization required",
      description: "Please log in to manage your favorites",
      variant: "destructive",
    });
  };

  if (variant === "hover") {
    return (
      <Heart
        onClick={currentUser ? handleClick : handleToastNoLogin}
        width={32}
        height={32}
        className={cn(
          "block stroke-primary absolute opacity-0 left-[12px] top-[12px] invisible group-hover:opacity-100 group-hover:visible cursor-pointer transition-all duration-300 ease-in-out",
          isFavorite ? "fill-primary visible opacity-100" : "fill-transparent",
          isCooldown && "opacity-50 cursor-not-allowed"
        )}
      />
    );
  }
  if (variant === "static") {
    return (
      <Heart
        onClick={currentUser ? handleClick : handleToastNoLogin}
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
