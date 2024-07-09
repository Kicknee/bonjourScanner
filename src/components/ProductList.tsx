import { useEffect, useState } from "react";
import ProductRecord from "./ProductRecord";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await fetch("/.netlify/functions/get_products").then(
          (response) => response.json()
        );
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
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
