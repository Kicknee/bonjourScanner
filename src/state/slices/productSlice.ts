import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

const initialState: Partial<ProductType> = {
  _id: undefined,
  STYLE: undefined,
  TYPE: undefined,
  PLACE: undefined,
  LEFT: undefined,
  COLOR: undefined,
  BRAND: undefined,
  SHIPPING_COMPANY: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<ProductType>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default productSlice.reducer;
export const { select } = productSlice.actions;
