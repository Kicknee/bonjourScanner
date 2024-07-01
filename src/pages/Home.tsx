import LogoContainer from "../components/LogoContainer";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import LeftSide from "../components/layoutComponents/LeftSide";
import RightSide from "../components/layoutComponents/RightSide";
import SectionDivider from "../components/layoutComponents/SectionDivider";

const Home = () => {
  return (
    <div className="row align-items-center" style={{ overflow: "hidden" }}>
      <div className="col-12 px-4 px-md-5 mx-auto col-xl-8">
        <div className="row d-none d-md-flex">
          <LeftSide />
          <SectionDivider />
          <RightSide />
        </div>
        <div className="row d-md-none">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-9">
                    <LogoContainer />
                  </div>
                </div>
                <SearchBar />
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
