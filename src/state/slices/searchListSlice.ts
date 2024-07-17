import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

const initialState: ProductType[] = [];

const searchListSlice = createSlice({
  name: "searchList",
  initialState,
  reducers: {
    find: (state, action: PayloadAction<string>) =>
      state.filter((product) => product.STYLE === action.payload),
    reset: (state) => (state = []),
  },
});

export default searchListSlice.reducer;
export const { find, reset } = searchListSlice.actions;
