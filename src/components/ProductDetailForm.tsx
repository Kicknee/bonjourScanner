import { ChangeEvent, useState } from "react";
import { ProductType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";
import { triggerModal } from "../utils/triggerModal";

interface ProductDetailsFormProps {
  mode: "add" | "edit";
  productProp?: ProductType;
}

const ProductDetailsForm = ({ mode, productProp }: ProductDetailsFormProps) => {
  const defaultInput: ProductType = {
    STYLE: "",
    TYPE: "",
    PLACE: "",
    LEFT: 0,
    COLOR: "",
    BRAND: "",
    SHIPPING_COMPANY: "",
  };

  const [input, setInput] = useState<ProductType>(
    productProp ? { ...productProp } : defaultInput
  );

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
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
  }

  const formName = mode === "edit" ? "edit-form" : "add-form";

  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-dark table-borderless fs-5 product-details-table">
          <tbody>
            {input._id && (
              <input
                type="hidden"
                id="_id"
                name="_id"
                value={input._id.toString()}
                data-val={input._id.toString()}
              />
            )}
            {Object.entries(input).map(([key, val]) => {
              if (key === "_id") return null;
              const { displayKey } = examineEntries(key);

              return (
                <tr key={key} style={{ height: "48px", display: "block" }}>
                  <th>{displayKey}</th>
                  <th>
                    <input
                      form={formName}
                      id={key}
                      name={key}
                      data-val={val}
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
      </div>
    </div>
  );
};

export default ProductDetailsForm;
