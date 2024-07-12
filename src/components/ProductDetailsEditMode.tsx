import { ChangeEvent, useState } from "react";

const ProductDetailsEditMode = ({ product }) => {
  const [input, setInput] = useState({ ...product });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { id } = event.target;
    const { value } = event.target;

    if (id === "LEFT" && (value === " " || isNaN(value))) return;

    setInput((prev) => {
      return {
        ...prev,
        [id]: [id][0] === "LEFT" ? Number(value) : value.toUpperCase(),
      };
    });
  }
  console.log(input);
  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <table className="table table-dark table-borderless text-siz fs-5">
          <tbody>
            {Object.entries(product)
              .slice(1)
              .map((arr) => {
                const value: [string, unknown] = [...arr];
                if (arr[0] == "SHIPPING_COMPANY") value[0] = "SHIPPING COMPANY";

                return (
                  <tr key={value[0]}>
                    <th>{value[0]}</th>
                    <th>
                      <input
                        id={arr[0]}
                        className="text-uppercase"
                        type="text"
                        form="edit-form"
                        placeholder={value[1] as string}
                        autoCapitalize="on"
                        value={input[arr[0]]}
                        onChange={(event) => {
                          handleInput(event);
                        }}
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
