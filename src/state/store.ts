import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./slices/productListSlice";
import productReducer from "./slices/productSlice";
import editReducer from "./slices/editSlice";
import addReducer from "./slices/addSlice";

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    product: productReducer,
    add: addReducer,
    edit: editReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
