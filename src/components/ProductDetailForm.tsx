import { ChangeEvent, useRef, useState } from "react";
import { ProductType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";
import { triggerModal } from "../utils/triggerModal";

interface ProductDetailsFormProps {
  mode: "add" | "edit";
  productProp?: Partial<ProductType>;
}

const ProductDetailsForm = ({ mode, productProp }: ProductDetailsFormProps) => {
  // Default values for adding a new product
  const defaultInput: ProductType = {
    STYLE: "",
    TYPE: "",
    PLACE: "",
    LEFT: 0,
    COLOR: "",
    BRAND: "",
    SHIPPING_COMPANY: "",
  };

  // Initialize state: if in edit mode and an initial product is provided, use its values; otherwise, use default values
  const [input, setInput] = useState<ProductType>(
    productProp ? { ...productProp } : defaultInput
  );

  // Reference to store the _id, useful in edit mode if needed
  const _id = useRef<any>({});

  // Handler for input changes
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    // For the "LEFT" field, ensure the value is an integer
    const leftNumber =
      id === "LEFT" && Number.isInteger(Number(value)) ? Number(value) : null;

    // if (id === "LEFT" && !Number.isInteger(Number(value))) {
    //   triggerModal("Enter quantity");
    //   return;
    // }
    if (id === "LEFT" && leftNumber === null) {
      triggerModal("Enter quantity");
      return;
    }
    if (id === "LEFT" && leftNumber! > 10000) {
      triggerModal("Can't enter more than 10000");
      return;
    }
    // Update the state: for "LEFT" ensure non-negative value , for others convert to uppercase
    setInput((prev) => ({
      ...prev,
      [id]: id === "LEFT" ? Math.max(0, leftNumber) : value.toUpperCase(),
    }));
  }

  // Determine the form name based on the mode
  const formName = mode === "edit" ? "edit-form" : "add-form";

  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <table className="table table-dark table-borderless fs-5">
          <tbody>
            {Object.entries(input).map(([key, val]) => {
              // In edit mode, skip rendering the _id field but save its value in the ref
              if (key === "_id") {
                _id.current = val;
                return null;
              }
              // Get the display name for the key
              const { displayKey } = examineEntries(key);

              return (
                <tr key={key} style={{ height: "48px" }}>
                  <th>{displayKey}</th>
                  <th>
                    <input
                      form={formName}
                      id={key}
                      name={key}
                      data-id={_id.current}
                      className={
                        "opacity-75 border-0 h-50 p-1 text-uppercase " +
                        (key === "STYLE" && mode === "edit"
                          ? "bg-transparent text-text-color"
                          : "bg-input-color")
                      }
                      type={key === "LEFT" ? "number" : "text"}
                      autoCapitalize="on"
                      value={input[key as keyof ProductType]!.toString()}
                      onChange={handleInput}
                      // In edit mode, set the "STYLE" field to read-only
                      readOnly={key === "STYLE" && mode === "edit"}
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsForm;
