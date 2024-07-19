import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { enable } from "../state/slices/editSlice";
import deleteProduct from "../utils/deleteProduct";
import useProductState from "../state/hooks/useProductState";
import { ProductType } from "../types/types";
import { fill } from "../state/slices/productListSlice";
import { deselect } from "../state/slices/productSlice";
import getProducts from "../utils/getProducts";
const ProductDetailsTaskbarViewMode = () => {
  const dispatch = useDispatch();
  const enableEditMode = useDispatch();

  const currentProduct = useProductState();

  return (
    <div className="col-3">
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x"
          icon={faFilePen}
          style={{ color: "#ffffff" }}
          onClick={() => {
            enableEditMode(enable());
          }}
        />
      </button>
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x"
          icon={faTrash}
          style={{ color: "#ffffff" }}
          onClick={() => {
            (async () => {
              const response = await deleteProduct(
                currentProduct as ProductType
              );
              if (!response) {
                alert("couldn't delete a record");
              } else {
                alert("successful delete");
                dispatch(deselect());
                const refreshedList = await getProducts();
                if (!refreshedList) {
                  alert("Couldn't refresh product list");
                } else {
                  dispatch(fill(refreshedList));
                }
              }
            })();
          }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarViewMode;
