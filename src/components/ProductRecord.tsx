import { useDispatch } from "react-redux";
import { select } from "../state/slices/productSlice";
import { ProductProp } from "../types/types";

const ProductRecord = ({ productProp }: ProductProp) => {
  const dispatch = useDispatch();
  return (
    <tr
      className="dropdown user-select-none"
      onClick={() => dispatch(select(productProp))}
    >
      <td className="py-3">{productProp.STYLE}</td>
      <td className="py-3">{productProp.TYPE}</td>
      <td className="py-3">{productProp.PLACE}</td>
      <td className="py-3">{productProp.LEFT}</td>
    </tr>
  );
};

export default ProductRecord;
