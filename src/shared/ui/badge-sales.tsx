import { cn } from "../lib";
import { Badge } from "./badge";

type BadgeSalesProps = {
  discount?: number;
  className?: string;
};

export const BadgeSales = ({ discount, className }: BadgeSalesProps) => {
  return (
    discount! > 0 && (
      <Badge
        className={cn(
          "px-[6px] py-[1px] absolute top-4 right-4 uppercase text-center font-medium",
          className
        )}
      >
        Sale
      </Badge>
    )
  );
};
