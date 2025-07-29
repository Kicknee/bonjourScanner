import { useDispatch } from "react-redux";
import { selectProductState } from "../store/slices/productSlice";
import { ProductType } from "../lib/types";
import { setMode } from "../store/slices/productModeSlice";

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
      <td
        className="py-3"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {productProp.STYLE}
      </td>
      <td
        className="py-3"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {productProp.TYPE}
      </td>
      <td
        className="py-3"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {productProp.PLACE}
      </td>
      <td
        className="py-3"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {productProp.LEFT}
      </td>
    </tr>
  );
};

export default ProductRecord;
