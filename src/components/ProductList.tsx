import ProductRecord from "./ProductRecord";
import useProductListState from "../state/hooks/useProductListState";

const ProductList = () => {
  const productList = useProductListState();

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
              <ProductRecord key={key} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
