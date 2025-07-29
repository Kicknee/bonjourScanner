import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../lib/types";

const initialState: ProductType = {
  _id: undefined,
  STYLE: "",
  TYPE: "",
  PLACE: "",
  LEFT: 0,
  COLOR: "",
  BRAND: "",
  SHIPPING_COMPANY: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProductState: (
      state,
      action: PayloadAction<Partial<ProductType>>
    ) => {
      return { ...state, ...action.payload };
    },
    deselectProductState: () => initialState,
  },
});

export default productSlice.reducer;
export const { selectProductState, deselectProductState } =
  productSlice.actions;
