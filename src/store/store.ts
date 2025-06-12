import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import searchInputReducer from "./slices/searchInputSlice";
import modalReducer from "./slices/modalSlice";
import productModeReducer from "./slices/productModeSlice";

export const store = configureStore({
  reducer: {
    searchInput: searchInputReducer,
    product: productReducer,
    modal: modalReducer,
    mode: productModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
