import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

const initialState: ProductType[] | boolean[] = [];

const searchListSlice = createSlice({
  name: "searchList",
  initialState,
  reducers: {
    setSearchListState: (_, action: PayloadAction<ProductType[]>) => {
      return action.payload.length > 0 ? action.payload : [false];
    },
    resetSearchListState: (state) => (state = []),
  },
});

export default searchListSlice.reducer;
export const { setSearchListState, resetSearchListState } =
  searchListSlice.actions;
