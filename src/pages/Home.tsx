import LeftSide from "../components/layoutComponents/LeftSide";
import RightSide from "../components/layoutComponents/RightSide";
import CenterSide from "../components/layoutComponents/CenterSide";
import SectionDivider from "../components/layoutComponents/SectionDivider";
import Modal from "../components/Modal";
import useModalState from "../store/hooks/useModalState";
import useLogVisitor from "../store/hooks/useLogVisitor";

const Home = () => {
  const { show: showModal } = useModalState();

  useLogVisitor();

  return (
    <div className="row align-items-center" style={{ overflow: "hidden" }}>
      {showModal && <Modal />}
      <div className="col-12 px-4 px-md-5 mx-auto col-xxl-7">
        <div className="row d-none d-md-flex" style={{ height: "660px" }}>
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
