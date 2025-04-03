import Image from "next/image";
import Link from "next/link";
import { ButtonQuantity } from "@/features";
import { BadgeSales, PriceFormat, ProductWithQuantity } from "@/shared";
import { PriceProduct } from "./price-product";

import React from "react";
import { useDiscountTotalPrice } from "../model/use-discount-price";

type ProductCardProps = {
  product: ProductWithQuantity;
};

const featureProductsCart = ["car", "total", "price", "quantity", "color"];

export const CartProductCard = ({ product }: ProductCardProps) => {
  const [, setQuantity] = React.useState(product.quantity);
  const { totalPrice } = useDiscountTotalPrice(
    product.price,
    product.discount,
    product.quantity
  );
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
              <PriceFormat price={totalPrice} />
            </td>
            <td className="w-[160px] text-lg font-bold">
              <PriceProduct
                price={product.price}
                discount={product.discount}
                variant="cart"
              />
            </td>
            <td className="w-[120px]">
              <ButtonQuantity
                productId={product.id}
                quantity={product.quantity}
                setQuantity={setQuantity}
              />
            </td>
            <td className="w-[40px]">
              <span
                className="w-[19px] h-[19px] block rounded-full"
                style={{ backgroundColor: product.color[0] }}
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
