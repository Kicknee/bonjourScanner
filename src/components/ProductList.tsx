import ProductRecord from "./ProductRecord";
import useProductListState from "../store/hooks/useProductListState";
import useSearchListState from "../store/hooks/useSearchListState";
import { ProductType } from "../types/types";

const ProductList = () => {
  const productList =
    useSearchListState().length > 0
      ? useSearchListState()
      : useProductListState();

  return (
    <div className="table-container">
      <table
        className="table table-borderless table-hover table-dark"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <thead>
          <tr>
            <th style={{ width: "20%" }}>STYLE</th>
            <th style={{ width: "40%" }}>TYPE</th>
            <th style={{ width: "20%" }}>PLACE</th>
            <th style={{ width: "20%" }}>LEFT</th>
          </tr>
        </thead>
        <tbody>
          {productList[0] === false && (
            <tr>
              <td colSpan={4} className="text-center">
                Not found
              </td>
            </tr>
          )}
          {productList[0] !== false &&
            productList.map((product, key) => (
              <ProductRecord key={key} productProp={product as ProductType} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
