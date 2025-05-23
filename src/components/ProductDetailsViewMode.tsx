import { ProductProp } from "../types/types";
import { examineEntries } from "../utils/examineEntries";

const ProductDetailsViewMode = ({ productProp }: ProductProp) => {
  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-dark table-borderless fs-5 product-details-table">
          <tbody>
            {Object.entries(productProp)
              .slice(1)
              .map(([key, value]) => {
                const { displayKey, displayValue } = examineEntries(key, value);

                return (
                  <tr style={{ height: "48px" }} key={displayKey}>
                    <th>{displayKey}</th>
                    <th>{displayValue}</th>
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
