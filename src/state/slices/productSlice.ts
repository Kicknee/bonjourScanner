import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObjectId } from "mongodb";

interface ProductState {
  _id: ObjectId | undefined;
  STYLE: string | undefined;
  TYPE: string | undefined;
  PLACE: string | undefined;
  LEFT: number | undefined;
  COLOR: string | undefined;
  BRAND: string | undefined;
  SHIPPING_COMPANY: string | undefined;
}

const initialState: ProductState = {
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
    select: (state, action: PayloadAction<ProductState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { select } = productSlice.actions;
export default productSlice.reducer;
