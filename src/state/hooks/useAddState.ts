import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useAddState() {
  return useSelector((state: RootState) => state.add);
}
