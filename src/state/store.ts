import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./slices/productListSlice";
import productReducer from "./slices/productSlice";
import editReducer from "./slices/editSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    product: productReducer,
    edit: editReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
