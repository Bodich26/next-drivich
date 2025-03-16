import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FavoritesResponse } from "../model/favorites-type";

const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Favorites"],
  endpoints: (builder) => ({
    getFavorites: builder.query<FavoritesResponse, void>({
      query: () => "/favorites",
      providesTags: ["Favorites"],
    }),
  }),
});

export const { useGetFavoritesQuery } = favoritesApi;
export default favoritesApi;
