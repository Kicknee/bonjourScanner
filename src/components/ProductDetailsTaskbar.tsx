import { useSelector } from "react-redux";
import ProductDetailsTaskbarViewMode from "./ProductDetailsTaskbarViewMode";
import ProductDetailsTaskbarFormMode from "./ProductDetailsTaskbarFormMode";
import ProductQR from "./ProductQR";
import { RootState } from "../store/store";

const ProductDetailsTaskbar = () => {
  const mode = useSelector((state: RootState) => state.mode.mode);

  return (
    <div className="product-taskbar row justify-content-center justify-content-lg-end">
      <div className="col-9">
        <div className="row align-items-end">
          {(mode === "add" || mode === "edit") && (
            <ProductDetailsTaskbarFormMode />
          )}
          {mode === "view" && <ProductDetailsTaskbarViewMode />}
          <ProductQR />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTaskbar;
