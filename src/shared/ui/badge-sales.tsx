import { Badge } from "./badge";

type BadgeSalesProps = {
  discount?: number;
};

export const BadgeSales = ({ discount }: BadgeSalesProps) => {
  return (
    discount! > 0 && (
      <Badge className="px-[6px] py-[1px] absolute top-4 right-4 uppercase text-center font-medium">
        Sale
      </Badge>
    )
  );
};
