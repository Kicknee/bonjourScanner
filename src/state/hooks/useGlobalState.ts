import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useGlobalState() {
  return useSelector((state: RootState) => state);
}
