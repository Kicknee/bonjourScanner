import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

const initialState: ProductType[] = [];

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    fillProductListState: (_, action) => action.payload,
  },
});

export default productListSlice.reducer;
export const { fillProductListState } = productListSlice.actions;
