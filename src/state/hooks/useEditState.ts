import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useEditState() {
  return useSelector((state: RootState) => state.edit);
}
