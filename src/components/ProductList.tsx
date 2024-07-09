import { useEffect, useState } from "react";
import ProductRecord from "./ProductRecord";
import get_records from "../utils/get_records";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await get_records();
      setProducts(products);
    })();
  }, []);

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
            {products.map((_, key) => (
              <ProductRecord key={key} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
