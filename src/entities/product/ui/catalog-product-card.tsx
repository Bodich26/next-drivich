import Image from "next/image";
import Link from "next/link";
import { ButtonAddToCart, ButtonAddToFavorites } from "@/features";
import { DecorLine } from "@/shared";
import { ProductType } from "../model";

type ProductCardProps = {
  product: ProductType;
};

export const CatalogProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group max-w-[300px] hover-shadow-block relative">
      <div>
        <ButtonAddToFavorites />
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
          <dl className="flex items-center gap-2">
            <dt className="text-black-opacity75 text-base">Power:</dt>
            <dd className="font-bold text-base">{`${product.power} hp`}</dd>
          </dl>

          {product.speed !== undefined && (
            <dl className="flex items-center gap-2">
              <dt className="text-black-opacity75 text-base">Top speed:</dt>
              <dd className="font-bold text-base">{`${product.speed} km/h`}</dd>
            </dl>
          )}
          {product.acceleration !== undefined && (
            <dl className="flex items-center gap-2">
              <dt className="text-black-opacity75 text-base">0-100 km/h:</dt>
              <dd className="font-bold text-base">{`${product.acceleration} s`}</dd>
            </dl>
          )}
          {product.engineType === "engine" &&
            product.engineVolume !== undefined && (
              <dl className="flex items-center gap-2">
                <dt className="text-black-opacity75 text-base">Engine:</dt>
                <dd className="font-bold text-base">{`${product.engineVolume} L`}</dd>
              </dl>
            )}
          {product.engineType === "electro" &&
            product.batteryCapacity !== undefined && (
              <dl className="flex items-center gap-2">
                <dt className="text-black-opacity75 text-base">Battery:</dt>
                <dd className="font-bold text-base">{`${product.batteryCapacity} kWh`}</dd>
              </dl>
            )}
        </div>
        <div className="flex items-end justify-between mt-4">
          <ButtonAddToCart variant="button" />
          <div>
            <p className="font-bold text-2xl">
              ${product.price?.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
