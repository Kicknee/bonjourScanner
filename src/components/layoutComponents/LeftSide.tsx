import React from "react";
import ProductList from "../ProductList";
import LogoContainer from "../LogoContainer";

const LeftSide = () => {
  return (
    <div
      // style={{
      //   width: "100%",
      //   height: "100%",
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "space-around",
      //   paddingTop: "50px",
      //   // background: "red",
      // }}
      className="col-6"
    >
      <ProductList />
      <LogoContainer />
    </div>
  );
};

export default LeftSide;
