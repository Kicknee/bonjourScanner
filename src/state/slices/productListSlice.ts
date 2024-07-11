import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

const initialState: ProductType[] = [];

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    fill: (_, action) => action.payload,
  },
});

export default productListSlice.reducer;
export const { fill } = productListSlice.actions;
