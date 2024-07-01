import LogoContainer from "../LogoContainer";
import SearchBar from "../SearchBar";
import ProductList from "../ProductList";

const CenterSide = () => {
  return (
    <div className="col-12">
      <div className="row justify-content-center">
        <div className="col-9">
          <LogoContainer />
        </div>
      </div>
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default CenterSide;
