import ProductDetailsTaskbar from "./ProductDetailsTaskbar";
import ProductDetails from "./ProductDetails";
import ProductDetailsEdit from "./ProductDetailsEdit";
import useEditState from "../state/hooks/useEditState";
import useProductState from "../state/hooks/useProductState";

const Product = () => {
  const editMode = useEditState();
  const selected_product = useProductState();

  return (
    <div className="row">
      <div className="col-12">
        {editMode ? (
          <ProductDetails product={selected_product} />
        ) : (
          <ProductDetailsEdit product={selected_product} />
        )}
        <ProductDetailsTaskbar />
      </div>
    </div>
  );
};

export default Product;
