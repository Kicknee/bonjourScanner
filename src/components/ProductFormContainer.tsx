import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";

import { ProductType, ResponseType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";
import { triggerModal } from "../utils/triggerModal";
import { deselectProductState } from "../store/slices/productSlice";
import { setMode } from "../store/slices/productModeSlice";
import ProductQR from "./ProductQR";
import { useAddProduct, useUpdateProduct } from "../store/hooks/useProducts";

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
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();

  const mutation = mode === "add" ? addProduct : updateProduct;

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

    const productData = { ...input };

    // Validate
    const allFieldsFilled = Object.entries(productData).every(
      ([key, value]) => {
        if (key === "_id") return true;
        return value !== undefined && value !== null && value !== "";
      }
    );

    if (!allFieldsFilled) {
      triggerModal("Fill in all fields");
      return;
    }

    try {
      const response: ResponseType = await mutation.mutateAsync(productData);
      triggerModal(response.message);
      dispatch(setMode("idle"));
      dispatch(deselectProductState());
    } catch (error) {
      triggerModal("Unexpected error occurred.");
      dispatch(setMode("idle"));
    }
  };

  const handleCancel = () => {
    dispatch(setMode("view"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="col-9 d-flex flex-column align-items-end mx-auto"
    >
      <table className="table table-dark table-borderless fs-5 product-details-table">
        <tbody>
          {Object.entries(input).map(([key, val]) => {
            if (key === "_id") return null;
            const { displayKey } = examineEntries(key);
            return (
              <tr key={key} style={{ height: "48px" }}>
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
                    style={{ width: "150px" }}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="col-9 d-flex gap-2 mt-3">
        <div className="d-flex flex-column justify-content-end">
          <button className="btn" type="submit">
            <FontAwesomeIcon
              className="fa-3x"
              icon={faFloppyDisk}
              style={{ color: "#fff" }}
            />
          </button>
          <button className="btn" type="button" onClick={handleCancel}>
            <FontAwesomeIcon
              className="fa-3x"
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
