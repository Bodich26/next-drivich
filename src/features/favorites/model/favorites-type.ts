import { Favorites } from "@prisma/client";

type FavoritesRequest = {
  userId: string;
  productId: number;
};

type FavoritesResponse = {
  message: string;
  error?: string;
  success?: boolean;
  items: Favorites[];
};

export type { FavoritesRequest, FavoritesResponse };
