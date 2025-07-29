import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ProductType } from "../../lib/types";

export default function useProductState() {
  return useSelector((state: RootState) => state.product) as ProductType;
}
