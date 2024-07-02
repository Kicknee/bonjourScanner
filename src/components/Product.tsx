import { useState } from "react";
import ProductDetailsTaskbar from "./ProductDetailsTaskbar";
import ProductDetails from "./ProductDetails";
import ProductDetailsEdit from "./ProductDetailsEdit";

const Product = () => {
  return (
    <div className="row">
      <div className="col-12">
        <ProductDetailsEdit product={{}} />
        <ProductDetailsTaskbar />
      </div>
    </div>
  );
};

export default Product;
