import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddToCartReq,
  AddToCartRes,
  CartRes,
  RemoveFromCartReq,
  RemoveFromCartRes,
  UpCartQuantityRes,
  UpCartQuantityReq,
} from "../model/cart-type";

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query<CartRes, void>({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation<AddToCartRes, AddToCartReq>({
      query: ({ productId }) => ({
        url: "/cart",
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: builder.mutation<RemoveFromCartRes, RemoveFromCartReq>({
      query: ({ productId }) => ({
        url: "/cart",
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    upCartQuantity: builder.mutation<UpCartQuantityRes, UpCartQuantityReq>({
      query: ({ productId, quantity }) => ({
        url: "/cart",
        method: "PUT",
        body: { productId, quantity },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartQuery,
  useUpCartQuantityMutation,
} = cartApi;
export default cartApi;
