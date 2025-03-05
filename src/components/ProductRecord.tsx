import { useDispatch } from "react-redux";
import { selectProductState } from "../store/slices/productSlice";
import { ProductProp } from "../types/types";
import { disableEdit } from "../store/slices/editSlice";
import { disableAdd } from "../store/slices/addSlice";

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
