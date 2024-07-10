import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useProductState() {
  return useSelector((state: RootState) => state.product);
}
