import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ConfirmOrderReq, ConfirmOrderRes } from "../model/checkout-type";

const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    confirmOrder: builder.mutation<ConfirmOrderRes, ConfirmOrderReq>({
      query: (orderData) => ({
        url: "/checkout",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});
export const { useConfirmOrderMutation } = checkoutApi;
export default checkoutApi;
