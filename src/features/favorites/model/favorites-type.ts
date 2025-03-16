import { Product } from "@prisma/client";

type FavoritesRequest = {
  userId: string;
  productId: number;
};

type FavoritesResponse = {
  error?: string;
  success?: boolean;
  items: Product[];
};

export type { FavoritesRequest, FavoritesResponse };
