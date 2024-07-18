import ProductRecord from "./ProductRecord";
import useProductListState from "../state/hooks/useProductListState";
import useSearchListState from "../state/hooks/useSearchListState";
const ProductList = () => {
  const productList =
    useSearchListState().length > 0
      ? useSearchListState()
      : useProductListState();

  return (
    <div className="table-container">
      <table className="table m-0 table-borderless table-dark">
        <thead>
          <tr>
            <th>STYLE</th>
            <th>TYPE</th>
            <th>PLACE</th>
            <th>LEFT</th>
          </tr>
        </thead>
      </table>
      <div className="tbody-wrapper">
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
            {productList.map((product, key) => (
              <ProductRecord key={key} productProp={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
