import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";
import useProductListState from "../hooks/useProductListState";

const initialState: ProductType[] = [];

const searchListSlice = createSlice({
  name: "searchList",
  initialState,
  reducers: {
    find: (_, action: PayloadAction<ProductType[]>) => {
      return action.payload;
    },
    reset: (state) => (state = []),
  },
});

export default searchListSlice.reducer;
export const { find, reset } = searchListSlice.actions;
