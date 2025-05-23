import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

const initialState: ProductType[] = [
  {
    STYLE: "ss",
    TYPE: "sss",
    PLACE: "ss",
    LEFT: 23,
    COLOR: "ss",
    BRAND: "sa",
    SHIPPING_COMPANY: "sss",
  },
];

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    fillProductListState: (_, action) => action.payload,
  },
});

export default productListSlice.reducer;
export const { fillProductListState } = productListSlice.actions;
