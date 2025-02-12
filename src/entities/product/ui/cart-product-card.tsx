import Image from "next/image";
import Link from "next/link";
import { ProductType, PriceProduct } from "@/entities";
import { ButtonQuantity } from "@/features";
import { BadgeSales } from "@/shared";

type ProductCardProps = {
  product: ProductType;
};

const featureProductsCart = ["car", "total", "price", "quantity", "color"];

export const CartProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group w-full hover-shadow-block relative rounded-md p-[12px] bg-color-white flex gap-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {featureProductsCart.map((feature, index) => (
              <th
                key={index}
                className="text-left text-black-opacity75 text-base font-normal capitalize"
              >
                {feature}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link
                className="product-item-title uppercase"
                href={`/product/${product.id}`}
                passHref
              >
                {product.model}
              </Link>
            </td>
            <td className="w-[160px] text-lg font-bold">
              ${product.price?.toLocaleString("en-US")}
            </td>
            <td className="w-[160px] text-lg font-bold">
              <PriceProduct
                price={product.price}
                discount={product.discount}
                variant="cart"
              />
            </td>
            <td className="w-[120px]">
              <ButtonQuantity />
            </td>
            <td className="w-[40px]">
              <span
                className="w-[19px] h-[19px] block rounded-full"
                style={{ backgroundColor: product.color }}
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
      <Image
        src={product.imageSrc}
        width={179}
        height={98}
        alt={product.model}
        className="rounded-md relative"
      />
      <BadgeSales discount={product.discount} />
    </div>
  );
};
