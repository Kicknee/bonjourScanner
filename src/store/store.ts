import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./slices/productListSlice";
import productReducer from "./slices/productSlice";
import searchListReducer from "./slices/searchListSlice";
import modalReducer from "./slices/modalSlice";
import productModeReducer from "./slices/productModeSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    searchList: searchListReducer,
    product: productReducer,
    modal: modalReducer,
    mode: productModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
