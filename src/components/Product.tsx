import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import useProductState from "../store/hooks/useProductState";

import ProductDetailsForm from "./ProductDetailForm";
import ProductDetailsViewMode from "./ProductDetailsViewMode";
import ProductDetailsTaskbar from "./ProductDetailsTaskbar";
import { ProductMode } from "../store/slices/productStateSlice";

const Product = () => {
  const selectedProduct = useProductState();
  const mode: ProductMode = useSelector((state: RootState) => state.mode.mode);

  const hasProduct = Boolean(selectedProduct._id);
  const shouldShowTaskbar = mode === "add" || (mode !== "idle" && hasProduct);

  const renderProductDetails = () => {
    switch (mode) {
      case "add":
        return <ProductDetailsForm mode="add" />;
      case "edit":
        return (
          hasProduct && (
            <ProductDetailsForm mode="edit" productProp={selectedProduct} />
          )
        );
      case "view":
        return (
          hasProduct && <ProductDetailsViewMode productProp={selectedProduct} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="row">
      <div className="col-10 d-flex flex-column">
        {renderProductDetails()}
        {shouldShowTaskbar && <ProductDetailsTaskbar />}
      </div>
    </div>
  );
};

export default Product;
