"use client";
import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/shared";

interface IProps {
  variant: "hover" | "static";
}

export const ButtonAddToFavorites = ({ variant }: IProps) => {
  const [active, setActive] = React.useState<boolean>(false);
  const handleSetActive = () => {
    setActive(!active);
  };
  if (variant === "hover") {
    return (
      <Heart
        onClick={() => handleSetActive()}
        width={32}
        height={32}
        className={cn(
          "block stroke-primary absolute opacity-0 left-[12px] top-[12px] invisible group-hover:opacity-100 group-hover:visible cursor-pointer transition-all duration-300 ease-in-out",
          active ? "fill-primary visible opacity-100" : "fill-transparent"
        )}
      />
    );
  }
  if (variant === "static") {
    return (
      <Heart
        onClick={() => handleSetActive()}
        width={32}
        height={32}
        className={cn(
          "block stroke-primary hover:cursor-pointer transition-all duration-300 ease-in-out",
          active ? "fill-primary" : "fill-transparent"
        )}
      />
    );
  }
};
