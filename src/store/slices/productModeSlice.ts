import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductMode = "view" | "add" | "edit" | "idle";

interface ProductModeState {
  mode: ProductMode;
}

const initialState: ProductModeState = {
  mode: "idle",
};

const productModeSlice = createSlice({
  name: "productMode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ProductMode>) => {
      state.mode = action.payload;
    },
    resetMode: (state) => {
      state.mode = "idle";
    },
  },
});

export const { setMode, resetMode } = productModeSlice.actions;
export default productModeSlice.reducer;
