import { useState } from "react";

const ProductDetailsEditMode = ({ product }) => {
  // const [input, setInput] = useState({ ...product });

  // function handleInput
  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <table className="table table-dark table-borderless text-siz fs-5">
          <tbody>
            {Object.entries(product)
              .slice(1)
              .map((arr) => {
                let value = arr;
                if (arr[0] == "SHIPPING_COMPANY") value[0] = "SHIPPING COMPANY";

                return (
                  <tr key={arr[0]}>
                    <th>{arr[0]}</th>
                    <th>
                      <input
                        className="text-uppercase"
                        type="text"
                        form="edit-form"
                        placeholder={arr[1] as string}
                        autoCapitalize="on"
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
