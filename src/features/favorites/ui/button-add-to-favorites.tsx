"use client";
import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/shared";

export const ButtonAddToFavorites = () => {
  const [active, setActive] = React.useState<boolean>(false);
  const handleSetActive = () => {
    setActive(!active);
  };
  return (
    <Heart
      onClick={() => handleSetActive()}
      width={32}
      height={32}
      className={cn(
        "stroke-primary absolute opacity-0 right-[12px] top-[12px] invisible group-hover:opacity-100 group-hover:visible cursor-pointer transition-all duration-300 ease-in-out",
        active ? "fill-primary" : "fill-transparent"
      )}
    />
  );
};
