import React from "react";
import LeftSide from "../components/layoutComponents/LeftSide";
import RightSide from "../components/layoutComponents/RightSide";

const Home = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Home;
