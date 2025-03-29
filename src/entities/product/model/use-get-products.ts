"use client";

import React from "react";
import { useGetProductsQuery } from "../api/product-api";

type QueryParams = {
  priceMin?: string;
  priceMax?: string;
  engine?: string;
  electro?: string;
  model?: string;
  powerRanges?: string;
  sort: string;
};

export const useGetProducts = () => {
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    0, 900000,
  ]);
  const [engineTypes, setEngineTypes] = React.useState<string[]>([]);
  const [searchModel, setSearchModel] = React.useState<string>("");
  const [powerRanges, setPowerRanges] = React.useState<
    { min: number; max: number }[]
  >([]);
  const [sortOrder, setSortOrder] = React.useState("asc");

  const queryParams: QueryParams = {
    priceMin: priceRange[0].toString(),
    priceMax: priceRange[1].toString(),
    engine: engineTypes.includes("Engine") ? "true" : undefined,
    electro: engineTypes.includes("Electro") ? "true" : undefined,
    model: searchModel,
    powerRanges: JSON.stringify(powerRanges),
    sort: sortOrder,
  };

  const { data, isLoading, error } = useGetProductsQuery(queryParams);

  return {
    products: data || [],
    isLoading,
    error,
    setPriceRange,
    priceRange,
    engineTypes,
    setEngineTypes,
    setSearchModel,
    setPowerRanges,
    setSortOrder,
  };
};
