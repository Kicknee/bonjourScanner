import { createSlice } from "@reduxjs/toolkit";
import { AddType } from "../../types/types";

const initialState: AddType = false;

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    enable: () => true,
    disable: () => false,
  },
});

export default addSlice.reducer;
export const { enable, disable } = addSlice.actions;
