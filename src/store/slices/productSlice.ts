import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    selectProductState: (state, action) => {
      return { ...state, ...action.payload };
    },
    deselectProductState: () => initialState,
  },
});

export default productSlice.reducer;
export const { selectProductState, deselectProductState } =
  productSlice.actions;
