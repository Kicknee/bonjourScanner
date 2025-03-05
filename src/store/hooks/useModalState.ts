import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useModalState() {
  return useSelector((state: RootState) => state.modal);
}
