import Image from "next/image";
import Link from "next/link";
import { BadgeSales, DecorLine } from "@/shared";
import { ProductType, PriceProduct } from "@/entities";
import { ButtonAddToCart, ButtonDeleteFavorites } from "@/features";

type ProductCardProps = {
  product: ProductType;
};

export const FavoriteProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="max-w-[300px] relative">
      <ButtonDeleteFavorites />
      <div>
        <BadgeSales className="top-2 right-2" discount={product.discount} />
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
          <PriceProduct
            price={product.price}
            discount={product.discount}
            variant="favorites"
          />
          <ButtonAddToCart variant="icon" />
        </div>
      </div>
    </div>
  );
};
