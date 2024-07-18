import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/types";

const initialState: ProductType[] = [];

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    fill: (_, action) => action.payload,
    updateProductState: (state, action) => {
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
    deleteProductState: (state, action) => {
      return state.filter(
        (product) => product._id !== action.payload._id && product
      );
    },
  },
});

export default productListSlice.reducer;
export const { fill, updateProductState, deleteProductState } =
  productListSlice.actions;
