"use client";
import Image from "next/image";
import Link from "next/link";
import { ButtonAddToCart, ButtonAddToFavorites } from "@/features";
import { DecorLine } from "@/shared";

export const ProductCard = () => {
  return (
    <div className="group max-w-[380px] hover-shadow-block relative">
      <div>
        <ButtonAddToFavorites />
        <Image
          src={image_src!}
          width={300}
          height={160}
          alt={image_alt!}
          className="rounded-t-md"
        />
      </div>
      <div className=" pt-2 pb-4 pr-4 pl-4 bg-color-white rounded-b-md">
        <Link
          className="product-item-title uppercase"
          href={`/product/${productId}`}
          passHref
        >
          {model}
        </Link>
        <DecorLine />
        <div className="flex flex-col gap-1">
          <dl className="flex items-center gap-2">
            <dt className="text-black-opacity75 text-base">Power: </dt>
            <dd className="font-bold text-base">{`${power} hp`}</dd>
          </dl>
          <dl className="flex items-center gap-2">
            <dt className="text-black-opacity75 text-base">Top speed: </dt>
            <dd className="font-bold text-base">{`${speed} km/h`}</dd>
          </dl>
          <dl className="flex items-center gap-2">
            <dt className="text-black-opacity75 text-base">0-100 km/h: </dt>
            <dd className="font-bold text-base">{`${acceleration} s`}</dd>
          </dl>
          <dl className="flex items-center gap-2">
            {engineType === "engine" && (
              <>
                <dt className="text-black-opacity75 text-base">Engine: </dt>
                <dd className="font-bold text-base">{`${engineVolume} L`}</dd>
              </>
            )}
            {engineType === "electro" && (
              <>
                <dt className="text-black-opacity75 text-base">Electro: </dt>
                <dd className="font-bold text-base">{`${batteryCapacity} kw/h`}</dd>
              </>
            )}
          </dl>
        </div>
        <div className="flex items-end justify-between mt-4">
          <ButtonAddToCart />
          <div>
            <p className="font-bold text-2xl">
              ${price?.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
