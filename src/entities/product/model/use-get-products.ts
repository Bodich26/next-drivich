import { useGetProductsQuery } from "../api/product-api";

export const useGetProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  return { products: data || [], isLoading, error };
};
