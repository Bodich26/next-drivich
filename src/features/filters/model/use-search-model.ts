"use client";
import React from "react";
import { SearchType } from "./filters-type";

export const useSearchModel = ({ setSearchText }: SearchType) => {
  const [searchBrand, setSearchBrand] = React.useState<string>("");

  const handleSearchModel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBrand(event.target.value);
    setSearchText?.(event.target.value);
  };
  return { handleSearchModel, searchBrand, setSearchText };
};
