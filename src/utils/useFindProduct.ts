import { useDispatch } from "react-redux";
import { find, reset } from "../state/slices/searchListSlice";
import useProductListState from "../state/hooks/useProductListState";

const dispatch = useDispatch();
const currentList = useProductListState();

export default function useFindProduct(input: string) {
  if (!input) {
    dispatch(reset());
    return;
  }
  const searchList = currentList.filter((product) =>
    product.STYLE.includes(input)
  );
  dispatch(find(searchList));
}
