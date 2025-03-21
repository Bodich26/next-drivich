"use client";
import React from "react";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useToggleQuantity } from "../model/use-toggle-quantity";
import { useHandleToast } from "@/shared";

type ButtonQuantityProps = {
  productId: number;
  quantity: number;
  setQuantity: (value: number) => void;
};

export const ButtonQuantity = ({
  productId,
  quantity,
  setQuantity,
}: ButtonQuantityProps) => {
  const { toggleQuantity } = useToggleQuantity();
  const { showToast } = useHandleToast();

  const handleChange = async (newQuantity: number) => {
    if (quantity < 1) return;

    const { success, error } = await toggleQuantity(productId, newQuantity);
    if (success) {
      setQuantity(newQuantity);

      if (newQuantity === 0) {
        showToast("remove", "cart");
      }
    } else {
      showToast("error", "cart", error);
    }
  };
  return (
    <div className="flex items-center gap-[6px] relative">
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
