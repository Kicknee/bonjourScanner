import LeftSide from "../components/layoutComponents/LeftSide";
import RightSide from "../components/layoutComponents/RightSide";
import SectionDivider from "../components/layoutComponents/SectionDivider";

const Home = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 px-5 mx-auto col-xl-8">
        <div className="row">
          <LeftSide />
          <SectionDivider />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
