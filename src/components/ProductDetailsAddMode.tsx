import { ChangeEvent, useState } from "react";
import { examineEntries } from "../utils/examineEntries";

const ProductDetailsAddMode = () => {
  const [input, setInput] = useState({
    STYLE: "",
    TYPE: "",
    PLACE: "",
    LEFT: "",
    COLOR: "",
    BRAND: "",
    SHIPPING_COMPANY: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    if (id === "LEFT" && (value === " " || isNaN(Number(value)))) return;

    setInput((prev) => {
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
            {Object.entries(input).map(([key, val]) => {
              const { displayKey } = examineEntries(key);

              return (
                <tr key={key}>
                  <th>{displayKey}</th>
                  <th>
                    <input
                      id={key}
                      className="text-uppercase"
                      type="text"
                      form="add-form"
                      autoCapitalize="on"
                      value={val}
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

export default ProductDetailsAddMode;
