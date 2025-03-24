import { ProductWithQuantity } from "@/shared";

type AddToFavoritesReq = {
  productId: number;
};
type RemoveFavoritesReq = {
  productId: number;
};

type FavoritesRes = {
  error?: string;
  success?: boolean;
  items: ProductWithQuantity[];
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
