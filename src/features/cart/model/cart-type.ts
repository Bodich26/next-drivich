import { Product } from "@prisma/client";

type AddToCartReq = {
  productId: number;
};

type AddToCartRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

type RemoveFromCartReq = {
  productId: number;
};

type CartItem = Product & { quantity: number };

type CartRes = {
  error?: string;
  success?: boolean;
  items: CartItem[];
};

type RemoveFromCartRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

type UpCartQuantityReq = {
  productId: number;
  quantity: number;
  error?: string;
  success?: boolean;
  message?: string;
};

type UpCartQuantityRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

export type {
  AddToCartReq,
  AddToCartRes,
  CartRes,
  RemoveFromCartRes,
  RemoveFromCartReq,
  UpCartQuantityReq,
  UpCartQuantityRes,
};
