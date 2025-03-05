import { useDispatch } from "react-redux";
import { fillProductListState } from "../store/slices/productListSlice";
import getProducts from "../services/getProducts";

export default async function useProductList() {
  const dispatch = useDispatch();
  try {
    const products = await getProducts();

    dispatch(fillProductListState(products));
  } catch (error) {
    console.error(error);
  }
}
