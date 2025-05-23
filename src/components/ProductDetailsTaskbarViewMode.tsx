import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import useProductState from "../store/hooks/useProductState";
import { ProductType } from "../types/types";
import { fillProductListState } from "../store/slices/productListSlice";
import { deselectProductState } from "../store/slices/productSlice";
import { triggerModal } from "../utils/triggerModal";
import productService from "../services/productService";
import { setMode } from "../store/slices/productStateSlice";

const ProductDetailsTaskbarViewMode = () => {
  const dispatch = useDispatch();
  const currentProduct = useProductState();

  const handleEditClick = () => {
    dispatch(setMode("edit"));
  };

  const handleDeleteClick = async () => {
    let response = await productService.delete(currentProduct as ProductType);

    if (!response || response.status === 400 || response.status === 404) {
      triggerModal(response.message || "Couldn't delete the record");
      return;
    }

    triggerModal(response.message);
    dispatch(deselectProductState());
    dispatch(setMode("idle"));

    response = await productService.get();
    if (!response || response.status === 400 || response.status === 404) {
      triggerModal(response.message || "Couldn't refresh product list");
    } else {
      dispatch(fillProductListState(response.payload));
    }
  };

  return (
    <div className="col-3">
      <button className="btn" onClick={handleEditClick}>
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faPenToSquare}
          style={{ color: "#ffffff" }}
        />
      </button>
      <button className="btn" onClick={handleDeleteClick}>
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faTrash}
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarViewMode;
