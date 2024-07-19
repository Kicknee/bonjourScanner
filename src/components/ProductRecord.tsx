import { useDispatch } from "react-redux";
import { selectProductState } from "../state/slices/productSlice";
import { ProductProp } from "../types/types";
import { disableEdit } from "../state/slices/editSlice";
import { disableAdd } from "../state/slices/addSlice";

const ProductRecord = ({ productProp }: ProductProp) => {
  const dispatch = useDispatch();
  return (
    <tr
      className="dropdown user-select-none"
      onClick={() => {
        dispatch(selectProductState(productProp));
        dispatch(disableEdit());
        dispatch(disableAdd());
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
