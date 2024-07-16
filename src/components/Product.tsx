import ProductDetailsTaskbar from "./ProductDetailsTaskbar";
import ProductDetailsEditMode from "./ProductDetailsEditMode";
import useEditState from "../state/hooks/useEditState";
import useProductState from "../state/hooks/useProductState";
import ProductDetailsViewMode from "./ProductDetailsViewMode";

const Product = () => {
  const editMode = useEditState();
  const selectedProduct = useProductState();

  return (
    <div className="row">
      <div className="col-12">
        {editMode ? (
          <ProductDetailsEditMode productProp={selectedProduct} />
        ) : (
          <ProductDetailsViewMode productProp={selectedProduct} />
        )}
        <ProductDetailsTaskbar editMode={editMode} />
      </div>
    </div>
  );
};

export default Product;
