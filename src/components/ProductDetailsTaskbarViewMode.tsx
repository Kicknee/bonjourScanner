import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { enable } from "../state/slices/editSlice";
import deleteProduct from "../utils/delete_product";
import useProductState from "../state/hooks/useProductState";

const ProductDetailsTaskbarViewMode = () => {
  const enableEditMode = useDispatch();

  const current_product_style = useProductState().STYLE;

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
              await deleteProduct(current_product_style);
            })();
          }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarViewMode;
