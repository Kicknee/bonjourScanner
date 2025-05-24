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
    console.log("Product", product, "Response", response);
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
    <>
      <div className="row">
        <div className="col-12">
          <table className="table table-dark table-borderless fs-5 product-details-table">
            <tbody>
              {Object.entries(product)
                .slice(1)
                .map(([key, value]) => {
                  const { displayKey, displayValue } = examineEntries(
                    key,
                    value
                  );

                  return (
                    <tr style={{ height: "48px" }} key={displayKey}>
                      <th>{displayKey}</th>
                      <th>{displayValue}</th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="d-flex gap-2 mt-3">
        <div className="d-flex flex-column justify-content-end">
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
        <ProductQR />
      </div>
    </>
  );
};

export default ProductViewContainer;
