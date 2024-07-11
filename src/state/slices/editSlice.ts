import { createSlice } from "@reduxjs/toolkit";
import { EditType } from "../../types/types";

const initialState: EditType = false;

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
