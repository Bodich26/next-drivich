"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../model";

type ProductCardProps = {
  product: ProductType;
};

export const CartProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group max-w-full hover-shadow-block relative rounded-md p-[12px] bg-color-white">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-black-opacity75 text-base font-normal">
              Car
            </th>
            <th className="text-left text-black-opacity75 text-base font-normal">
              Total
            </th>
            <th className="text-left text-black-opacity75 text-base font-normal">
              Price
            </th>
            <th className="text-left text-black-opacity75 text-base font-normal">
              Quantity
            </th>
            <th className="text-left text-black-opacity75 text-base font-normal">
              Color
            </th>
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
            <td>${product.price?.toLocaleString("en-US")}</td>
            <td>${product.price?.toLocaleString("en-US")}</td>
            <td>2</td>
            <td>{product.color}</td>
          </tr>
        </tbody>
      </table>
      <Image
        src={product.imageSrc}
        width={179}
        height={98}
        alt={product.model}
        className="rounded-md"
      />
    </div>
  );
};
