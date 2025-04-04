import { ChangeEvent, useState } from "react";
import { examineEntries } from "../utils/examineEntries";
import { ProductType } from "../types/types";

const ProductDetailsAddMode = () => {
  const [input, setInput] = useState<ProductType>({
    STYLE: "",
    TYPE: "",
    PLACE: "",
    LEFT: 0,
    COLOR: "",
    BRAND: "",
    SHIPPING_COMPANY: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    if (id === "LEFT" && !Number.isInteger(Number(value))) return;

    setInput((prev: ProductType) => {
      return {
        ...prev,
        [id]: id === "LEFT" ? Math.max(0, Number(value)) : value.toUpperCase(),
      };
    });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <table className="table table-dark table-borderless fs-5">
          <tbody>
            {Object.entries(input).map(([key]) => {
              const { displayKey } = examineEntries(key);
              return (
                <tr key={key}>
                  <th>{displayKey}</th>
                  <th>
                    <input
                      form="add-form"
                      id={key}
                      name={key}
                      className="opacity-75 border-0 bg-input-color h-50 p-1 text-uppercase"
                      type={key === "LEFT" ? "number" : "text"}
                      autoCapitalize="on"
                      value={input[key as keyof ProductType]!.toString()}
                      onChange={handleInput}
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

export default ProductDetailsAddMode;
