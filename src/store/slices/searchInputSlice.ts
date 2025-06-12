import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState: "",
  reducers: {
    setSearchInputSlice: (_, action: PayloadAction<string>) => action.payload,
    resetSearchInputSlice: () => "",
  },
});

export default searchInputSlice.reducer;
export const { setSearchInputSlice, resetSearchInputSlice } =
  searchInputSlice.actions;
