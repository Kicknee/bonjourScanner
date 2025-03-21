import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalType {
  show: boolean;
  message: string;
}

const initialState: ModalType = {
  show: false,
  message: "",
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModalState: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    messageModalState: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { showModalState, messageModalState } = modalSlice.actions;
