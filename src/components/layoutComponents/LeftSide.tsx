import React from "react";
import ProductList from "../ProductList";
import LogoContainer from "../LogoContainer";

const LeftSide = () => {
  return (
    <div className="col-5">
      <div className="row">
        <div className="col-12">
          <ProductList />
        </div>
      </div>
      <div className="row">
        <div className="col-7 mx-auto">
          <LogoContainer />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
