import { ChangeEvent, useRef, useState } from "react";
import { ProductProp, ProductType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";

const ProductDetailsEditMode = ({ productProp }: ProductProp) => {
  const [input, setInput] = useState<ProductType>({ ...productProp });
  const _id = useRef({});

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    if (id === "LEFT" && (value === " " || isNaN(Number(value)))) return;

    setInput((prev: ProductType) => {
      return {
        ...prev,
        [id]: id === "LEFT" ? Number(value) : value.toUpperCase(),
      };
    });
  }
  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <table className="table table-dark table-borderless text-siz fs-5">
          <tbody>
            {Object.entries(productProp).map(([key, val]) => {
              if (key === "_id") {
                _id.current = val;
                return;
              }

              const { displayKey } = examineEntries(key);

              return (
                <tr style={{ height: "48px" }} key={key}>
                  <th>{displayKey}</th>
                  <th>
                    <input
                      form="edit-form"
                      id={key}
                      name={key}
                      data-id={_id.current}
                      className="opacity-75 border-0 bg-input-color h-50 p-1 text-uppercase"
                      type="text"
                      placeholder={val as string}
                      autoCapitalize="on"
                      value={input[key as keyof ProductType] as string}
                      onChange={handleInput}
                      required
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

export default ProductDetailsEditMode;
