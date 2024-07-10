import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useGlobalState() {
  return useSelector((state: RootState) => state.product);
}
