import Image from "next/image";
import Link from "next/link";
import { DecorLine } from "@/shared";
import { ProductType } from "../model";
import { ButtonAddToCart, ButtonDeleteFavorites } from "@/features";

type ProductCardProps = {
  product: ProductType;
};

export const FavoriteProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="max-w-[300px] relative">
      <ButtonDeleteFavorites />
      <div>
        <Image
          src={product.imageSrc}
          width={300}
          height={160}
          alt={product.model}
          className="rounded-t-md"
        />
      </div>
      <div className=" pt-2 pb-4 pr-4 pl-4 bg-color-minimal-light-white rounded-b-md">
        <Link
          className="product-item-title uppercase"
          href={`/product/${product.id}`}
        >
          {product.model}
        </Link>
        <DecorLine />
        <div className="flex flex-row justify-between mt-[8px]">
          <dl className="flex items-center gap-2">
            <dt className="text-black-opacity75 text-base">Price: </dt>
            <dd className="font-bold text-base">
              ${product.price?.toLocaleString("en-US")}
            </dd>
          </dl>
          <ButtonAddToCart variant="icon" />
        </div>
      </div>
    </div>
  );
};
