import { useDispatch } from "react-redux";
import { fill } from "../state/slices/productListSlice";
import get_products from "./get_products";

export default async function useProductList() {
  const dispatch = useDispatch();
  try {
    const products = await get_products();

    dispatch(fill(products));
  } catch (error) {
    console.error(error);
  }
}
