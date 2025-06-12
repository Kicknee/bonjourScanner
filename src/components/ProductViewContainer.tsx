import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import useProductState from "../store/hooks/useProductState";
import { examineEntries } from "../utils/examineEntries";
import { triggerModal } from "../utils/triggerModal";
import { setMode } from "../store/slices/productStateSlice";
import ProductQR from "./ProductQR";
import { useDeleteProduct } from "../store/hooks/useProducts";
import { ResponseType } from "../types/types";

const ProductViewContainer = () => {
  const dispatch = useDispatch();
  const product = useProductState();
  const deleteProduct = useDeleteProduct();

  const handleEditClick = () => {
    dispatch(setMode("edit"));
  };

  const handleDeleteClick = async () => {
    try {
      const response: ResponseType = await deleteProduct.mutateAsync(product);
      triggerModal(response.message);
      dispatch(setMode("idle"));
    } catch (error) {
      triggerModal("Unexpected error occurred.");
      dispatch(setMode("idle"));
    }
  };

  return (
    <div className="col-9 d-flex flex-column align-items-end justify-content-end mx-auto">
      <table className="table table-dark table-borderless fs-5 product-details-table">
        <tbody>
          {Object.entries(product).map(([key, value]) => {
            if (key === "_id") return;
            const { displayKey, displayValue } = examineEntries(key, value);

            return (
              <tr style={{ height: "48px" }} key={displayKey}>
                <th>{displayKey}</th>
                <th style={{ width: "150px" }}>{displayValue}</th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="col-9 d-flex gap-2 mt-3">
        <div className="d-flex flex-column justify-content-end">
          <button className="btn" onClick={handleEditClick}>
            <FontAwesomeIcon
              className="fa-3x"
              icon={faPenToSquare}
              style={{ color: "#ffffff" }}
            />
          </button>
          <button className="btn" onClick={handleDeleteClick}>
            <FontAwesomeIcon
              className="fa-3x"
              icon={faTrash}
              style={{ color: "#ffffff" }}
            />
          </button>
        </div>
        <ProductQR />
      </div>
    </div>
  );
};

export default ProductViewContainer;
