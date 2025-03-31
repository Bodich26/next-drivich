"use client";
import React from "react";

import { PriceProduct, useGetProductId } from "@/entities";
import {
  ButtonAddToCart,
  ButtonToggleFavorites,
  ButtonBuyNow,
} from "@/features";
import {
  BadgeSales,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  cn,
  DecorLine,
} from "@/shared";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import Image from "next/image";

export const ProductPage = () => {
  const pathname = usePathname();
  const productId = pathname!.split("/").pop()?.toLowerCase() || "";

  const { product, isLoading, error } = useGetProductId({ productId });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  return (
    <>
      {product && (
        <div className="flex justify-between gap-8">
          <div className="flex flex-col justify-between p-4 rounded-md  basis-[70%] relative product-gradient">
            <div>
              <h1 className="font-bold text-3xl uppercase">
                {`${product.brand} - ${product.model}`}
              </h1>
              <div className="flex flex-row justify-start gap-3 items-start mt-2">
                <PriceProduct
                  variant="main"
                  price={product.price}
                  discount={product.discount}
                />
                <BadgeSales
                  className="relative left-0 top-3"
                  discount={product.discount}
                />
              </div>
            </div>
            <Image
              src={`/gallery/${product.id}/main.png`}
              alt={`${product.model} image main`}
              width={1920}
              height={0}
            />
            <div className="flex justify-between items-end">
              <dl className="flex justify-start gap-11">
                <div className="flex flex-col gap-1">
                  <dt className=" uppercase text-2xl text-black-opacity75">
                    WLTP
                  </dt>
                  <dd className="font-bold text-5xl">{product.speed}</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className=" uppercase text-2xl text-black-opacity75">
                    0-100KM/h
                  </dt>
                  <dd className="font-bold text-5xl">{product.acceleration}</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className=" uppercase text-2xl text-black-opacity75">
                    HP
                  </dt>
                  <dd className="font-bold text-5xl">{product.power}</dd>
                </div>
              </dl>
              <Carousel className="w-full max-w-[253px]">
                <CarouselContent>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={`/gallery/${product.id}/${index + 1}.jpg`}
                        alt={`${product.model} image ${index}`}
                        width={253}
                        height={0}
                        className="rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="bg-transparent top-4 left-1 text-white"
                  size="icon"
                  variant="link"
                />
                <CarouselNext
                  className="bg-transparent top-4 right-1 text-white"
                  size="icon"
                  variant="link"
                />
              </Carousel>
            </div>
          </div>
          <div className="rounded-md p-4 bg-color-white basis-[30%] ">
            <div className="flex flex-col justify-between h-full">
              <dl className="flex justify-between items-start mb-[22px]">
                <div>
                  <dt className="font-bold text-xl mb-3">Rating & Reviews</dt>
                  <dd className="flex gap-1">
                    {Array.from({ length: 5 }).map((star, index) => (
                      <Star
                        key={index}
                        width={22}
                        height={22}
                        className={cn(
                          "fill-primary stroke-primary group-hover:opacity-100 group-hover:visible cursor-pointer transition-all duration-300 ease-in-out"
                        )}
                      />
                    ))}
                  </dd>
                </div>
                <ButtonToggleFavorites
                  variant="static"
                  productId={product.id}
                />
              </dl>
              <DecorLine />
              <dl className="flex flex-col justify-between items-start mb-[22px]">
                <dt className="font-bold text-xl mb-3">Colors</dt>
                <dd className="flex">
                  {product.color.map((color: string, index: number) => (
                    <span
                      key={index}
                      className={cn("w-[27px] h-[27px] rounded-full  ")}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </dd>
              </dl>
              <DecorLine />
              <dl className="flex flex-col justify-between items-start mb-[22px]">
                <dt className="font-bold text-xl mb-3">Description</dt>
                <dd className="text-base text-black-opacity75">
                  The Porsche 911 GT3 RS is a high-performance sports car built
                  for the track yet street-legal. With a 4.0L naturally
                  aspirated flat-six engine, it delivers 518 hp and a 9,000 rpm
                  redline. Lightweight construction, aerodynamic enhancements,
                  and precision handling make it a masterpiece of speed,
                  agility, and driving exhilaration
                </dd>
              </dl>
              <DecorLine />
              <dl className="flex flex-col justify-between items-start mb-[22px]">
                <dt className="font-bold text-xl mb-3">Settings</dt>
                <dd className="text-base text-black-opacity75">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium.
                </dd>
              </dl>
              <DecorLine />
              <div className="flex flex-row items-start justify-between mt-4">
                <ButtonBuyNow />
                <ButtonAddToCart variant="button" productId={product.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
