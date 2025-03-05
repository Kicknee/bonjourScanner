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
    selectProductState: (state, action: PayloadAction<ProductType>) => {
      return { ...state, ...action.payload };
    },
    deselectProductState: () => initialState,
  },
});

export default productSlice.reducer;
export const { selectProductState, deselectProductState } =
  productSlice.actions;
