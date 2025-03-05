import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./slices/productListSlice";
import productReducer from "./slices/productSlice";
import editReducer from "./slices/editSlice";
import addReducer from "./slices/addSlice";
import searchListReducer from "./slices/searchListSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    searchList: searchListReducer,
    product: productReducer,
    add: addReducer,
    edit: editReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
