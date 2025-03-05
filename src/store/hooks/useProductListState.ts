import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useProductListState() {
  return useSelector((state: RootState) => state.productList);
}
