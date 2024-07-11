import ProductDetailsTaskbarViewMode from "./ProductDetailsTaskbarViewMode";
import ProductDetailsTaskbarEditMode from "./ProductDetailsTaskbarEditMode";
import ProductQR from "./ProductQR";

const ProductDetailsTaskbar = ({ editMode }) => {
  return (
    <div className="row justify-content-end">
      <div className="col-7">
        <div className="row align-items-end justify-content-around">
          {editMode ? (
            <ProductDetailsTaskbarEditMode />
          ) : (
            <ProductDetailsTaskbarViewMode />
          )}
          <ProductQR />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTaskbar;
