import ProductDetailsTaskbar from "./ProductDetailsTaskbar";
import ProductDetailsEditMode from "./ProductDetailsEditMode";
import useEditState from "../state/hooks/useEditState";
import useProductState from "../state/hooks/useProductState";
import ProductDetailsViewMode from "./ProductDetailsViewMode";
import useAddState from "../state/hooks/useAddState";
import ProductDetailsAddMode from "./ProductDetailsAddMode";

const Product = () => {
  const addMode = useAddState();
  const editMode = useEditState();
  const selectedProduct = useProductState();

  return (
    <div className="row">
      <div className="col-12">
        {editMode && !addMode && (
          <ProductDetailsEditMode productProp={selectedProduct} />
        )}
        {!editMode && !addMode && (
          <ProductDetailsViewMode productProp={selectedProduct} />
        )}
        {!editMode && addMode && <ProductDetailsAddMode />}

        <ProductDetailsTaskbar editMode={editMode} addMode={addMode} />
      </div>
    </div>
  );
};

export default Product;
