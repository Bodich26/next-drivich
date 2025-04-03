import { useCurrentUser } from "@/shared";
import { useGetOrdersQuery } from "../api/orders-api";

export const useGetOrders = () => {
  const currentUser = useCurrentUser();
  const { data, isLoading, error } = useGetOrdersQuery(undefined, {
    skip: !currentUser,
  });

  return {
    orders: data?.orderList || [],
    isLoading,
    error: error && "Server Error",
  };
};
