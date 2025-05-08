import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { enableEdit } from "../store/slices/editSlice";
import useProductState from "../store/hooks/useProductState";
import { ProductType } from "../types/types";
import { fillProductListState } from "../store/slices/productListSlice";
import { deselectProductState } from "../store/slices/productSlice";
import { triggerModal } from "../utils/triggerModal";
import productService from "../services/productService";

const ProductDetailsTaskbarViewMode = () => {
  const dispatch = useDispatch();

  const currentProduct = useProductState();

  return (
    <div className="col-3">
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faPenToSquare}
          style={{ color: "#ffffff" }}
          onClick={() => {
            dispatch(enableEdit());
          }}
        />
      </button>
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faTrash}
          style={{ color: "#ffffff" }}
          onClick={() => {
            (async () => {
              let response = await productService.delete(
                currentProduct as ProductType
              );
              if (
                !response ||
                response.status === 400 ||
                response.status === 404
              ) {
                triggerModal(response.message || "Couldn't delete the record");
              } else {
                triggerModal(response.message);
                dispatch(deselectProductState());
                response = await productService.get();
                if (
                  !response ||
                  response.status === 400 ||
                  response.status === 404
                ) {
                  triggerModal(
                    response.message || "Couldn't refresh product list"
                  );
                } else {
                  dispatch(fillProductListState(response.payload));
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
