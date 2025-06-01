import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import useProductState from "../store/hooks/useProductState";
import { ProductType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";
import { fillProductListState } from "../store/slices/productListSlice";
import { deselectProductState } from "../store/slices/productSlice";
import { triggerModal } from "../utils/triggerModal";
import productService from "../services/productService";
import { setMode } from "../store/slices/productStateSlice";
import ProductQR from "./ProductQR";

const ProductViewContainer = () => {
  const dispatch = useDispatch();
  const product = useProductState();

  const handleEditClick = () => {
    dispatch(setMode("edit"));
  };

  const handleDeleteClick = async () => {
    let response = await productService.delete(product as ProductType);
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
