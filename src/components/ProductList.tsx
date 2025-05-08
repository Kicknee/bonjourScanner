import ProductRecord from "./ProductRecord";
import useProductListState from "../store/hooks/useProductListState";
import useSearchListState from "../store/hooks/useSearchListState";

const ProductList = () => {
  const productList =
    useSearchListState().length > 0
      ? useSearchListState()
      : useProductListState();

  return (
    <div className="table-container">
      <table className="table table-borderless table-hover table-dark">
        <thead>
          <tr>
            <th>STYLE</th>
            <th>TYPE</th>
            <th>PLACE</th>
            <th>LEFT</th>
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
              <ProductRecord key={key} productProp={product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
