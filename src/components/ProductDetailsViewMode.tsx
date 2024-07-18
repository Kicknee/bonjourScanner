import { ProductProp } from "../types/types";

const ProductDetailsViewMode = ({ productProp }: ProductProp) => {
  const examineEntries = (key: string, value: string) => {
    const displayKey = key == "SHIPPING_COMPANY" ? "SHIPPING COMPANY" : key;
    const displayValue =
      typeof value === "string" && value.length > 11
        ? `${value.substring(0, 9)}...`
        : value;

    return { displayKey, displayValue };
  };
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
