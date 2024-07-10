import { FC } from "react";
import { useDispatch } from "react-redux";
import { select } from "../state/slices/productSlice";
import { ProductType } from "../types/types";

const ProductRecord: FC<{ product: ProductType }> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr
      className="dropdown user-select-none"
      onClick={() => dispatch(select(product))}
    >
      <td className="py-3">{product.STYLE}</td>
      <td className="py-3">{product.TYPE}</td>
      <td className="py-3">{product.PLACE}</td>
      <td className="py-3">{product.LEFT}</td>
    </tr>
  );
};

export default ProductRecord;

/*
const product_structure = {
  _id: { $oid: "66856c0375973d0eccb7f9a4" },
  STYLE: "T9UYJ",
  TYPE: "KURTKA",
  PLACE: "M6",
  LEFT: { $numberInt: "74" },
  COLOR: "CZERWONY",
  BRAND: "GUCCI",
  SHIPPING_COMPANY: "CMA CGM GROUP",
};

*/
