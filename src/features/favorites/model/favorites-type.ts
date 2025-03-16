import { Product } from "@prisma/client";

type AddToFavoritesReq = {
  productId: number;
};
type RemoveFavoritesReq = {
  productId: number;
};

type FavoritesRes = {
  error?: string;
  success?: boolean;
  items: Product[];
};

type AddToFavoritesRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

type RemoveFavoritesRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

export type {
  AddToFavoritesReq,
  AddToFavoritesRes,
  FavoritesRes,
  RemoveFavoritesRes,
  RemoveFavoritesReq,
};
