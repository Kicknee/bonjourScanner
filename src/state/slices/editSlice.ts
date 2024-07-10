import { createSlice } from "@reduxjs/toolkit";

type EditSlice = boolean;

const initialState: EditSlice = false;

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    enable: () => true,
    disable: () => false,
  },
});

export default editSlice.reducer;

export const { enable, disable } = editSlice.actions;
