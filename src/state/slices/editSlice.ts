import { createSlice } from "@reduxjs/toolkit";
import { EditType } from "../../types/types";

const initialState: EditType = false;

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    enableEdit: () => true,
    disableEdit: () => false,
  },
});

export default editSlice.reducer;
export const { enableEdit, disableEdit } = editSlice.actions;
