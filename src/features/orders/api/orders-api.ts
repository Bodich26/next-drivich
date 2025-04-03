import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OrdersRes } from "../model/orders-type";

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getOrders: builder.query<OrdersRes, void>({
      query: () => "/orders",
      providesTags: ["Orders"],
    }),
  }),
});

export const { useGetOrdersQuery } = ordersApi;
export default ordersApi;
