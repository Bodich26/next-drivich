import { ProductWithQuantity } from "@/shared";
import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductWithQuantity[], Record<string, string>>({
      query: (params) => {
        const searchParams = new URLSearchParams(params);
        return `/products?${searchParams.toString()}`;
      },
      providesTags: ["Products"],
    }),

    getProductsById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
