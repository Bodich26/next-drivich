"use client";
import { BarLoader } from "react-spinners";
import { cn } from "../lib";

type Props = {
  className?: string;
};
export const LoaderLine = ({ className }: Props) => {
  return (
    <div className={cn("mt-2", className)}>
      <BarLoader width="308px" color="hsl(221.2 83.2% 53.3%)" />
    </div>
  );
};
