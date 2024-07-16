import { createSlice } from "@reduxjs/toolkit";
import { AddType } from "../../types/types";

const initialState: AddType = false;

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    enableAdd: () => true,
    disableAdd: () => false,
  },
});

export default addSlice.reducer;
export const { enableAdd, disableAdd } = addSlice.actions;
