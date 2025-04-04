import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddToFavoritesReq,
  AddToFavoritesRes,
  FavoritesRes,
  RemoveFavoritesRes,
  RemoveFavoritesReq,
} from "../model/favorites-type";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Favorites"],
  endpoints: (builder) => ({
    getFavorites: builder.query<FavoritesRes, void>({
      query: () => "/favorites",
      providesTags: ["Favorites"],
    }),
    addToFavorites: builder.mutation<AddToFavoritesRes, AddToFavoritesReq>({
      query: ({ productId }) => ({
        url: "/favorites",
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Favorites"],
    }),
    removeFavorites: builder.mutation<RemoveFavoritesRes, RemoveFavoritesReq>({
      query: ({ productId }) => ({
        url: "/favorites",
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["Favorites"],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFavoritesMutation,
} = favoritesApi;
