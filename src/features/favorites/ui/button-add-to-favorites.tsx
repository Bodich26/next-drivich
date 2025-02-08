"use client";
import React from "react";
import { Heart } from "lucide-react";

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
      stroke="#2a2eb7"
      fill={active ? "#2a2eb7" : "none"}
      className="absolute opacity-0 right-[12px] top-[12px] invisible group-hover:opacity-100 group-hover:visible cursor-pointer transition-all duration-300 ease-in-out"
    />
  );
};
