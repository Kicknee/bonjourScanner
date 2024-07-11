import ProductDetailsTaskbar from "./ProductDetailsTaskbar";
import ProductDetailsEditMode from "./ProductDetailsEditMode";
import useEditState from "../state/hooks/useEditState";
import useProductState from "../state/hooks/useProductState";
import ProductDetailsViewMode from "./ProductDetailsViewMode";

const Product = () => {
  const editMode = useEditState();
  const selected_product = useProductState();

  return (
    <div className="row">
      <div className="col-12">
        {editMode ? (
          <ProductDetailsEditMode product={selected_product} />
        ) : (
          <ProductDetailsViewMode product={selected_product} />
        )}
        <ProductDetailsTaskbar editMode={editMode} />
      </div>
    </div>
  );
};

export default Product;
