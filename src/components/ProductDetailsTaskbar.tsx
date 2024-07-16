import ProductDetailsTaskbarViewMode from "./ProductDetailsTaskbarViewMode";
import ProductDetailsTaskbarEditMode from "./ProductDetailsTaskbarEditMode";
import ProductQR from "./ProductQR";
import ProductDetailsTaskbarAddMode from "./ProductDetailsTaskbarAddMode";

const ProductDetailsTaskbar = ({ editMode, addMode }) => {
  return (
    <div className="row justify-content-end">
      <div className="col-7">
        <div className="row align-items-end justify-content-around">
          {editMode && !addMode && <ProductDetailsTaskbarEditMode />}
          {!editMode && !addMode && <ProductDetailsTaskbarViewMode />}
          {addMode && <ProductDetailsTaskbarAddMode />}
          <ProductQR />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTaskbar;
