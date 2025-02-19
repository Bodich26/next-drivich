import { calculateDiscountPrice } from "@/entities";
import { cn } from "@/shared";

type PriceProductProps = {
  price: number;
  discount?: number;
  variant: "catalog" | "cart" | "favorites" | "main";
};

export const PriceProduct = ({
  price,
  discount,
  variant,
}: PriceProductProps) => {
  const hasDiscount = discount && discount > 0;
  const discountedPrice = calculateDiscountPrice(price, discount);

  const priceElement = (
    <span className="font-bold">
      ${discountedPrice.toLocaleString("en-US")}
    </span>
  );

  const oldPriceElement = hasDiscount > 0 && (
    <span
      className={cn(
        "text-black/50 line-through",
        variant === "main" ? "text-xl" : "text-[16px]"
      )}
    >
      ${price.toLocaleString("en-US")}
    </span>
  );

  if (variant === "main") {
    return (
      <div className="flex gap-3 items-end">
        <span className="text-3xl font-medium">{priceElement}</span>
        <span>{oldPriceElement}</span>
      </div>
    );
  }

  if (variant === "favorites") {
    return (
      <div>
        <dl className="flex items-center gap-2">
          <dt className="text-black-opacity75 text-base">Price: </dt>
          <dd className="text-base">{priceElement}</dd>
        </dl>
        {oldPriceElement}
      </div>
    );
  }

  if (variant === "cart" || variant === "catalog") {
    return (
      <div className="flex flex-col relative">
        <span className={variant === "catalog" ? "text-2xl font-bold" : ""}>
          {priceElement}
        </span>
        {oldPriceElement && (
          <span className="absolute -top-5">{oldPriceElement}</span>
        )}
      </div>
    );
  }

  return null;
};
