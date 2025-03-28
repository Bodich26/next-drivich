"use client";
import { Checkbox } from "@/shared";
import React from "react";

export type FilterCheckboxProps = {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

export const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6 border border-black/15"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
