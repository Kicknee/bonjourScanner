import { ProductProp } from "../types/types";
import { examineEntries } from "../utils/examineEntries";

const ProductDetailsViewMode = ({ productProp }: ProductProp) => {
  return (
    <div className="row my-3 justify-content-center">
      <div className="col-9">
        <table className=" table table-dark table-borderless text-siz fs-5">
          <tbody>
            {Object.entries(productProp)
              .slice(1)
              .map(([key, value]) => {
                const { displayKey, displayValue } = examineEntries(key, value);

                return (
                  <tr key={displayKey}>
                    <th>{key}</th>
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
