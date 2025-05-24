import { useDispatch } from "react-redux";
import { selectProductState } from "../store/slices/productSlice";
import { ProductType } from "../types/types";
import { setMode } from "../store/slices/productStateSlice";

interface Props {
  productProp: ProductType;
}
const ProductRecord = ({ productProp }: Props) => {
  const dispatch = useDispatch();

  return (
    <tr
      className="dropdown user-select-none"
      onClick={() => {
        dispatch(selectProductState(productProp));
        dispatch(setMode("view"));
      }}
    >
      <td className="py-3">{productProp.STYLE}</td>
      <td className="py-3">{productProp.TYPE}</td>
      <td className="py-3">{productProp.PLACE}</td>
      <td className="py-3">{productProp.LEFT}</td>
    </tr>
  );
};

export default ProductRecord;
