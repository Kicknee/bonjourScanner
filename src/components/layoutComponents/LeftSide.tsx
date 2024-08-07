import ProductList from "../ProductList";
import LogoContainer from "../LogoContainer";

const LeftSide = () => {
  return (
    <div className="col-5">
      <div className="row">
        <div className="col-12 mb-5">
          <ProductList />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <LogoContainer />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
