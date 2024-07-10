import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import editReducer from "./slices/editSlice";

export const store = configureStore({
  reducer: { product: productReducer, edit: editReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
