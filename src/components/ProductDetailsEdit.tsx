import { useState } from "react";

const ProductDetailsEdit = ({ product }) => {
  const [input, setInput] = useState({});

  return (
    <div className="row">
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-9">
            <table className="table table-dark table-borderless text-siz fs-5">
              <tbody>
                <tr>
                  <th>STYLE</th>
                  <th>
                    <input type="text" form="edit-form" placeholder={"A1B23"} />
                  </th>
                </tr>
                <tr>
                  <th>TYPE</th>
                  <th>
                    <input
                      type="text"
                      form="edit-form"
                      placeholder={"KURTKA"}
                    />
                  </th>
                </tr>
                <tr>
                  <th>PLACE</th>
                  <th>
                    <input type="text" form="edit-form" placeholder={"D5"} />
                  </th>
                </tr>
                <tr>
                  <th>LEFT</th>
                  <th>
                    <input type="text" form="edit-form" placeholder={"85"} />
                  </th>
                </tr>
                <tr>
                  <th>COLOR</th>
                  <th>
                    <input
                      type="text"
                      form="edit-form"
                      placeholder={"CZERWONY"}
                    />
                  </th>
                </tr>
                <tr>
                  <th>BRAND</th>
                  <th>
                    <input type="text" form="edit-form" placeholder={"H@M"} />
                  </th>
                </tr>
                <tr>
                  <th>SHIPPING COMPANY</th>
                  <th>
                    <input
                      type="text"
                      form="edit-form"
                      placeholder={"ARTUR LLC."}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsEdit;
