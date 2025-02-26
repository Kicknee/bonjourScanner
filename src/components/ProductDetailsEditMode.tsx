import { ChangeEvent, useRef, useState } from "react";
import { ProductProp, ProductType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";

const ProductDetailsEditMode = ({ productProp }: ProductProp) => {
  const [input, setInput] = useState<ProductType>({ ...productProp });
  const _id = useRef({});

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
                      className={
                        "opacity-75 border-0 h-50 p-1 text-uppercase" +
                        `${
                          key === "STYLE"
                            ? "bg-transparent text-text-color"
                            : "bg-input-color"
                        }`
                      }
                      type={key === "LEFT" ? "number" : "text"}
                      placeholder={val as string}
                      autoCapitalize="on"
                      value={input[key as keyof ProductType]!.toString()}
                      onChange={handleInput}
                      required
                      readOnly={key === "STYLE"}
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
