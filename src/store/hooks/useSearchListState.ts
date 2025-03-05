import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useSearchListState() {
  return useSelector((state: RootState) => state.searchList);
}
