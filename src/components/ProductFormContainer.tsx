import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";

import { ProductType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";
import { triggerModal } from "../utils/triggerModal";
import productService from "../services/productService";
import { fillProductListState } from "../store/slices/productListSlice";
import { selectProductState } from "../store/slices/productSlice";
import { setMode } from "../store/slices/productStateSlice";
import ProductQR from "./ProductQR";

interface Props {
  mode: "add" | "edit";
  productProp?: ProductType;
}

const defaultInput: ProductType = {
  STYLE: "",
  TYPE: "",
  PLACE: "",
  LEFT: 0,
  COLOR: "",
  BRAND: "",
  SHIPPING_COMPANY: "",
};

const ProductFormContainer = ({ mode, productProp }: Props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<ProductType>(productProp ?? defaultInput);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const leftNumber =
      id === "LEFT" && Number.isInteger(Number(value)) ? Number(value) : null;

    if (id === "LEFT" && leftNumber! > 10000) {
      triggerModal("Can't enter more than 10000");
      return;
    }

    setInput((prev) => ({
      ...prev,
      [id]: id === "LEFT" ? Math.max(0, leftNumber!) : value.toUpperCase(),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fields = { ...input };

    // Validate
    const allFieldsFilled = Object.entries(fields).every(([key, value]) => {
      if (key === "_id") return true;
      return value !== undefined && value !== null && value !== "";
    });

    if (!allFieldsFilled) {
      triggerModal("Fill in all fields");
      return;
    }

    try {
      if (mode === "add") {
        const response = await productService.add(fields);
        if (!response || response.status >= 400) {
          triggerModal(response.message || "Couldn't add product");
        } else {
          triggerModal(response.message);
          const listResponse = await productService.get();
          if (listResponse.status < 400) {
            dispatch(fillProductListState(listResponse.payload));
          }
        }
      } else if (mode === "edit") {
        if (!input._id) {
          triggerModal("Product ID is missing");
          return;
        }
        const response = await productService.update(fields);
        if (!response || response.status >= 400) {
          triggerModal(response.message || "Couldn't update product");
        } else {
          triggerModal(response.message);
          dispatch(selectProductState(fields));
          const listResponse = await productService.get();
          if (listResponse.status < 400) {
            dispatch(fillProductListState(listResponse.payload));
          }
        }
      }
      dispatch(setMode("view"));
    } catch (err) {
      triggerModal("Unexpected error occurred.");
      dispatch(setMode("view"));
    }
  };

  const handleCancel = () => {
    dispatch(setMode("idle"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="col-11 d-flex flex-column align-items-center"
    >
      <table className="table table-dark table-borderless fs-5 product-details-table">
        <tbody>
          {Object.entries(input).map(([key, val]) => {
            if (key === "_id") return null;
            const { displayKey } = examineEntries(key);
            return (
              <tr key={key} style={{ height: "48px", display: "block" }}>
                <th>{displayKey}</th>
                <th>
                  <input
                    id={key}
                    name={key}
                    className={
                      "opacity-75 border-0 h-50 p-1 text-uppercase " +
                      (key === "STYLE" && mode === "edit"
                        ? "bg-transparent text-text-color"
                        : "bg-input-color")
                    }
                    type={key === "LEFT" ? "number" : "text"}
                    autoCapitalize="on"
                    value={val?.toString() ?? ""}
                    onChange={handleInput}
                    readOnly={key === "STYLE" && mode === "edit"}
                    maxLength={17}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex gap-2 mt-3">
        <div className="d-flex flex-column align-items-end justify-content-end">
          <button className="btn" type="submit">
            <FontAwesomeIcon
              className="fa-3x w-100"
              icon={faFloppyDisk}
              style={{ color: "#fff" }}
            />
          </button>
          <button className="btn" type="button" onClick={handleCancel}>
            <FontAwesomeIcon
              className="fa-3x w-100"
              icon={faBan}
              style={{ color: "#fff" }}
            />
          </button>
        </div>
        <ProductQR />
      </div>
    </form>
  );
};

export default ProductFormContainer;
