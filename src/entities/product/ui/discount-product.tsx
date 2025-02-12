import { calculateDiscountPrice } from "../model";

type SalesProductProps = {
  price: number;
  discount?: number;
};

export const SalesProduct = ({ price, discount }: SalesProductProps) => {
  const hasDiscount = discount && discount > 0;
  const discountedPrice = calculateDiscountPrice(price, discount);

  return (
    <div className="flex flex-col">
      {hasDiscount ? (
        <div className="grid">
          <span>${discountedPrice.toLocaleString("en-US")}</span>
          <span className="text-black/50 line-through text-[16px]">
            ${price.toLocaleString("en-US")}
          </span>
        </div>
      ) : (
        <span className="text-lg font-bold">
          ${price.toLocaleString("en-US")}
        </span>
      )}
    </div>
  );
};
