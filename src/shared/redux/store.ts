import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "@/features/auth/api/auth-api";
import { productsApi } from "@/entities/product/api/product-api";
import { favoritesApi } from "@/features/favorites/api/favorites-api";
import { cartApi } from "@/features/cart/api/cart-api";
import { checkoutApi } from "@/features/checkout/api/checkout-api";
import { ordersApi } from "@/features/orders/api/orders-api";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      authApi.middleware,
      favoritesApi.middleware,
      cartApi.middleware,
      checkoutApi.middleware,
      ordersApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
