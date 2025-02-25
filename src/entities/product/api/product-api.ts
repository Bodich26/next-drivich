import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../model";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_MAIN_URL_API }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => "/products",
    }),
    getProductsById: builder.query<ProductType, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
