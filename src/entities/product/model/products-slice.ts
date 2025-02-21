import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "./product-type";

interface IInitial {
  products: ProductType[];
  statusProduct: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IInitial = {
  products: [],
  statusProduct: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
