"use client";

import React from "react";
import { useGetProductsQuery } from "../api/product-api";

type QueryParams = {
  priceMin?: string;
  priceMax?: string;
};

export const useGetProducts = () => {
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    0, 900000,
  ]);

  const queryParams: QueryParams = {
    priceMin: priceRange[0].toString(),
    priceMax: priceRange[1].toString(),
  };

  const { data, isLoading, error } = useGetProductsQuery(queryParams);

  return { products: data || [], isLoading, error, setPriceRange, priceRange };
};
