import { ChangeEvent, useRef, useState } from "react";
import { ProductProp, ProductType } from "../types/types";

const ProductDetailsEditMode = ({ productProp }: ProductProp) => {
  const [input, setInput] = useState({ ...productProp });
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

              const displayKey =
                key === "SHIPPING_COMPANY" ? "SHIPPING COMPANY" : key;

              return (
                <tr key={key}>
                  <th>{displayKey}</th>
                  <th>
                    <input
                      id={key}
                      data-id={_id.current}
                      className="text-uppercase"
                      type="text"
                      form="edit-form"
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
