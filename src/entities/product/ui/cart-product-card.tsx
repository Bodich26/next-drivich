"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../model";
import { ButtonQuantity } from "@/features";
import { SalesProduct } from "./discount-product";
import { Badge } from "@/shared";

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
              <SalesProduct price={product.price} discount={product.discount} />
            </td>
            <td className="w-[120px]">
              <ButtonQuantity />
            </td>
            <td className="w-[40px]">
              <span className="w-[19px] h-[19px] block rounded-full bg-primary"></span>
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
      {product.discount && (
        <Badge className="px-[6px] py-[1px] absolute top-4 right-4 uppercase text-center font-medium">
          Sale
        </Badge>
      )}
    </div>
  );
};
