import LeftSide from "../components/layoutComponents/LeftSide";
import RightSide from "../components/layoutComponents/RightSide";
import CenterSide from "../components/layoutComponents/CenterSide";
import SectionDivider from "../components/layoutComponents/SectionDivider";
import { useEffect } from "react";
import getProducts from "../utils/getProducts";
import { useDispatch } from "react-redux";
import { fillProductListState } from "../state/slices/productListSlice";
import Modal from "../components/Modal";
import useModalState from "../state/hooks/useModalState";
import { showModalState, messageModalState } from "../state/slices/modalSlice";

const Home = () => {
  const { show: showModal } = useModalState();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const refreshedList = await getProducts();
      if (!refreshedList) {
        dispatch(messageModalState("Couldn't refresh product list"));
        dispatch(showModalState(true));
      } else {
        dispatch(fillProductListState(refreshedList));
      }
    })();
  }, []);

  return (
    <div className="row align-items-center" style={{ overflow: "hidden" }}>
      {showModal && <Modal />}
      <div className="col-12 px-4 px-md-5 mx-auto col-xl-7">
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
