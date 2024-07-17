import ProductDetailsEditMode from "./ProductDetailsEditMode";
import useEditState from "../state/hooks/useEditState";
import useProductState from "../state/hooks/useProductState";
import ProductDetailsViewMode from "./ProductDetailsViewMode";
import useAddState from "../state/hooks/useAddState";
import ProductDetailsAddMode from "./ProductDetailsAddMode";
import ProductDetailsTaskbar from "./ProductDetailsTaskbar";

const Product = () => {
  const addMode = useAddState();
  const editMode = useEditState();
  const selectedProduct = useProductState();

  return (
    <div className="row">
      <div className="col-12">
        {addMode && <ProductDetailsAddMode />}
        {selectedProduct._id && editMode && !addMode && (
          <ProductDetailsEditMode productProp={selectedProduct} />
        )}
        {selectedProduct._id && !editMode && !addMode && (
          <ProductDetailsViewMode productProp={selectedProduct} />
        )}
        {(selectedProduct._id || addMode) && (
          <ProductDetailsTaskbar addMode={addMode} editMode={editMode} />
        )}
      </div>
    </div>
  );
};

export default Product;
