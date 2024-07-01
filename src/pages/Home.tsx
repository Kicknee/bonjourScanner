import LeftSide from "../components/layoutComponents/LeftSide";
import RightSide from "../components/layoutComponents/RightSide";
import CenterSide from "../components/layoutComponents/CenterSide";
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
          <CenterSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
