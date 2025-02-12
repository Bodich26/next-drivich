"use client";
import React from "react";
import { CircleMinus, CirclePlus } from "lucide-react";

export const ButtonQuantity = () => {
  const [quantity, setQuantity] = React.useState<number>(1);
  const handleChange = (newValue: number) => {
    if (newValue < 1) return;
    setQuantity(newValue);
  };
  return (
    <div className="flex items-center gap-[9px]">
      <CirclePlus
        className="hover-effect-icon"
        onClick={() => handleChange(quantity + 1)}
      />
      <span className="text-lg font-bold">{quantity}</span>
      <CircleMinus
        className="hover-effect-icon"
        onClick={() => handleChange(quantity - 1)}
      />
    </div>
  );
};
