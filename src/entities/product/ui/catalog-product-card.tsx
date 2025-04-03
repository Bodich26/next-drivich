import Image from "next/image";
import Link from "next/link";
import { ButtonAddToCart, ButtonToggleFavorites } from "@/features";
import { BadgeSales, DecorLine, ProductWithQuantity } from "@/shared";
import { PriceProduct } from "./price-product";
import { ProductInfoItem } from "./product-info-item";

type ProductCardProps = {
  product: ProductWithQuantity;
};

export const CatalogProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group max-w-[300px] hover-shadow-block relative">
      <div>
        <BadgeSales discount={product.discount} />
        <ButtonToggleFavorites variant="hover" productId={product.id} />
        <Image
          src={product.imageSrc}
          width={300}
          height={160}
          alt={product.model}
          className="rounded-t-md"
        />
      </div>
      <div className="pt-2 pb-4 pr-4 pl-4 bg-color-white rounded-b-md">
        <Link
          className="product-item-title uppercase"
          href={`/product/${product.id}`}
          passHref
        >
          {product.model}
        </Link>
        <DecorLine />
        <div className="flex flex-col gap-1">
          <ProductInfoItem label="Power" value={product.power} text="hp" />
          {product.speed !== undefined && (
            <ProductInfoItem
              label="Top speed"
              value={product.speed}
              text="km/h"
            />
          )}
          {product.acceleration !== undefined && (
            <ProductInfoItem
              label="0-100 km/h"
              value={product.acceleration}
              text="s"
            />
          )}
          {product.engineType === "ENGINE" &&
            product.engineValue !== undefined && (
              <ProductInfoItem
                label="Engine"
                value={product.engineValue}
                text="L"
              />
            )}
          {product.engineType === "ELECTRO" &&
            product.batteryCapacity !== undefined && (
              <ProductInfoItem
                label="Battery"
                value={product.batteryCapacity}
                text="kw/h"
              />
            )}
        </div>
        <div className="flex items-end justify-between mt-4">
          <ButtonAddToCart variant="button" productId={product.id} />
          <PriceProduct
            price={product.price}
            discount={product.discount}
            variant="catalog"
          />
        </div>
      </div>
    </div>
  );
};
