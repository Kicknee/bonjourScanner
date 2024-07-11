import { useState } from "react";

const ProductDetailsEditMode = ({ product }) => {
  // const [input, setInput] = useState({});

  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <table className="table table-dark table-borderless text-siz fs-5">
          <tbody>
            <tr>
              <th>STYLE</th>
              <th>
                <input
                  type="text"
                  form="edit-form"
                  placeholder={product.STYLE}
                />
              </th>
            </tr>
            <tr>
              <th>TYPE</th>
              <th>
                <input
                  type="text"
                  form="edit-form"
                  placeholder={product.TYPE}
                />
              </th>
            </tr>
            <tr>
              <th>PLACE</th>
              <th>
                <input
                  type="text"
                  form="edit-form"
                  placeholder={product.PLACE}
                />
              </th>
            </tr>
            <tr>
              <th>LEFT</th>
              <th>
                <input
                  type="text"
                  form="edit-form"
                  placeholder={product.LEFT}
                />
              </th>
            </tr>
            <tr>
              <th>COLOR</th>
              <th>
                <input
                  type="text"
                  form="edit-form"
                  placeholder={product.COLOR}
                />
              </th>
            </tr>
            <tr>
              <th>BRAND</th>
              <th>
                <input
                  type="text"
                  form="edit-form"
                  placeholder={product.BRAND}
                />
              </th>
            </tr>
            <tr>
              <th>SHIPPING COMPANY</th>
              <th>
                <input
                  type="text"
                  form="edit-form"
                  placeholder={product.SHIPPING_COMPANY}
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsEditMode;
