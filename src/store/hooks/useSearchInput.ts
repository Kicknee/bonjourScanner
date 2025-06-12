import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useSearchInput() {
  return useSelector((state: RootState) => state.searchInput);
}
