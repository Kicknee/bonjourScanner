import useEditState from "../store/hooks/useEditState";
import useProductState from "../store/hooks/useProductState";
import ProductDetailsViewMode from "./ProductDetailsViewMode";
import useAddState from "../store/hooks/useAddState";
import ProductDetailsTaskbar from "./ProductDetailsTaskbar";
import ProductDetailsForm from "./ProductDetailForm";

const Product = () => {
  const addMode = useAddState();
  const editMode = useEditState();
  const selectedProduct = useProductState();

  return (
    <div className="row">
      <div className="col-12 d-flex flex-column">
        {addMode && <ProductDetailsForm mode={"add"} />}
        {selectedProduct._id && editMode && !addMode && (
          <ProductDetailsForm mode={"edit"} productProp={selectedProduct} />
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
