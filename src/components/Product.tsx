import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProductFormContainer from "./ProductFormContainer";
import ProductViewContainer from "./ProductViewContainer";
import { ProductType } from "../lib/types";

const Product = () => {
  const product = useSelector((state: RootState) => state.product);
  const { mode } = useSelector((state: RootState) => state.mode);
  const productId = product._id;

  if (mode === "add") {
    return <ProductFormContainer mode="add" />;
  }

  if (mode === "edit" && productId) {
    return (
      <ProductFormContainer mode="edit" productProp={product as ProductType} />
    );
  }

  if (mode === "view" && productId) {
    return <ProductViewContainer />;
  }

  return null;
};

export default Product;
