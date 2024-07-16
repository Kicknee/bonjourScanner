import { useDispatch } from "react-redux";
import { select } from "../state/slices/productSlice";
import { ProductProp } from "../types/types";
import { disable } from "../state/slices/editSlice";
import { disableAdd } from "../state/slices/addSlice";

const ProductRecord = ({ productProp }: ProductProp) => {
  const dispatch = useDispatch();
  return (
    <tr
      className="dropdown user-select-none"
      onClick={() => {
        dispatch(select(productProp));
        dispatch(disable());
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
