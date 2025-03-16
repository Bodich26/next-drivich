import { Product } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_MAIN_URL_API }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "api/products",
      providesTags: ["Products"],
    }),
    getProductsById: builder.query<Product, string>({
      query: (id) => `api/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
export default productsApi;
