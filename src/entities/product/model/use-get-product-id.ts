import { useGetProductsByIdQuery } from "../api/product-api";

type Props = {
  productId: string;
};

export const useGetProductId = ({ productId }: Props) => {
  const { data, isLoading, error } = useGetProductsByIdQuery(productId);
  return { product: data || null, productId, isLoading, error };
};
