import React from "react";
import ProductRecord from "./ProductRecord";

const ProductList = () => {
  const quantity = new Array(12).fill(2);

  return (
    <div className="product-list">
      <div className="product-list-headers">
        <div>STYLE</div>
        <div>TYPE</div>
        <div>PLACE</div>
        <div>LEFT</div>
      </div>
      <ul className="product-list-content">
        {quantity.map(() => (
          <ProductRecord />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
