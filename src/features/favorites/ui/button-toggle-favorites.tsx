"use client";
import React from "react";
import { Heart } from "lucide-react";
import { cn, useCurrentUser, useHandleToast } from "@/shared";
import { useFavoriteActions } from "../model/use-favorites-actions";
import { useGetFavorites } from "../model/use-get-favorites";

interface IProps {
  variant: "hover" | "static";
  productId: number;
}

export const ButtonToggleFavorites = ({ variant, productId }: IProps) => {
  const [isCooldown, setIsCooldown] = React.useState<boolean>(false);
  const { favoriteIds } = useGetFavorites();
  const { toggleFavorite } = useFavoriteActions();
  const { showToast } = useHandleToast();

  const isFavorite = favoriteIds.has(productId);
  const currentUser = useCurrentUser();

  const timeoutId = React.useRef<NodeJS.Timeout | null>(null);

  const handleClick = async () => {
    if (isCooldown) return;

    setIsCooldown(true);
    const { success, error } = await toggleFavorite(productId, isFavorite);

    if (success) {
      showToast(isFavorite ? "remove" : "add", "favorites");
    } else {
      showToast("error", "favorites", error);
    }
    timeoutId.current = setTimeout(() => setIsCooldown(false), 5000);
  };

  const authToast = () => showToast("auth", "favorites");

  React.useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  if (variant === "hover") {
    return (
      <Heart
        onClick={!currentUser ? authToast : handleClick}
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
        onClick={!currentUser ? authToast : handleClick}
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
