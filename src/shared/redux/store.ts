import { authApi } from "@/features/auth";
import { productsApi } from "@/entities/product";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesApi } from "@/features/favorites";
import { cartApi } from "@/features/cart";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      authApi.middleware,
      favoritesApi.middleware,
      cartApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
