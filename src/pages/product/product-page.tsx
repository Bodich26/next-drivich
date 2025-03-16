"use client";

import React from "react";
import { PriceProduct, ProductDetails } from "@/entities";
import {
  ButtonAddToCart,
  ButtonToggleFavorites,
  ButtonBuyNow,
} from "@/features";
import { BadgeSales, cn, DecorLine } from "@/shared";

const productItem = {
  id: 1,
  brand: "Porsche",
  model: "911 Gt3 Rs",
  imageSrc: "https://imgur.com/BrwAy5s.png",
  power: 480,
  speed: 307,
  color: ["#CBD4DB", "#112A61", "#901212"],
  acceleration: 3.2,
  engineType: "engine",
  engineVolume: 4.0,
  price: 309000,
  discount: 10,
};

export const ProductPage = () => {
  const [selectColor, setSelectColor] = React.useState(productItem.color[0]);
  return (
    <>
      <div className="flex justify-between gap-8 ">
        <div
          className="rounded-md bg-color-white basis-[55%] relative"
          style={{
            backgroundImage: `url(${productItem.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <BadgeSales discount={productItem.discount} />
        </div>
        <div className="rounded-md p-4 bg-color-white basis-[45%]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl uppercase">
              {`${productItem.brand}: ` + `${productItem.model}`}
            </h1>
            <ButtonToggleFavorites
              variant="static"
              productId={productItem.id}
            />
          </div>
          <DecorLine />
          <p className="text-[17px] text-black-opacity75 mb-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <PriceProduct variant="main" price={310000} discount={10} />
          <div className="flex flex-col gap-3 mt-7">
            <span className="font-medium text-lg">Colors</span>
            <div className="flex items-center gap-5">
              {productItem.color.map((color, index) => (
                <span
                  key={index}
                  onClick={() => setSelectColor(color)}
                  className={cn(
                    `w-[27px] h-[27px] rounded-full cursor-pointer relative transition-all duration-200`,
                    selectColor === color
                      ? "after:content-['']  after:w-full after:h-[2px] after:bg-[#1b1b1c]/50 after:absolute after:bottom-[-6px] after:left-0"
                      : ""
                  )}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            <div className="flex mt-[53px] gap-8">
              <ButtonBuyNow />
              <ButtonAddToCart variant="button" />
            </div>
          </div>
        </div>
      </div>
      <ProductDetails product={productItem} />
    </>
  );
};
