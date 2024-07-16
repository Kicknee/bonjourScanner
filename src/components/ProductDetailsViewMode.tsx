import { ProductProp } from "../types/types";

const ProductDetailsViewMode = ({ productProp }: ProductProp) => {
  return (
    <div className="row my-3 justify-content-center">
      <div className="col-9">
        <table className=" table table-dark table-borderless text-siz fs-5">
          <tbody>
            {Object.entries(productProp)
              .slice(1)
              .map(([key, val]) => {
                const displayKey =
                  key == "SHIPPING_COMPANY" ? "SHIPPING COMPANY" : key;

                return (
                  <tr key={displayKey}>
                    <th>{key}</th>
                    <th>{val}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsViewMode;
