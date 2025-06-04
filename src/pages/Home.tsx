import LeftSide from "../components/layoutComponents/LeftSide";
import RightSide from "../components/layoutComponents/RightSide";
import CenterSide from "../components/layoutComponents/CenterSide";
import SectionDivider from "../components/layoutComponents/SectionDivider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fillProductListState } from "../store/slices/productListSlice";
import Modal from "../components/Modal";
import useModalState from "../store/hooks/useModalState";
import { triggerModal } from "../utils/triggerModal";
import productService from "../services/productService";

const Home = () => {
  const { show: showModal } = useModalState();
  const dispatch = useDispatch();

  useEffect(() => {
    //get user ip and send through netlify function to google spreadsheet
    const logVisitor = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        await fetch("/.netlify/functions/logVisitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip,
            url: window.location.href,
          }),
        });
      } catch (error) {
        console.error("Visitor log failed: ", error);
      }
    };

    logVisitor();

    (async () => {
      const response = await productService.get();
      if (!response || response.status === 400 || response.status === 404) {
        triggerModal(response.message || "Couldn't refresh product list");
      } else {
        dispatch(fillProductListState(response.payload));
      }
    })();
  }, []);

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
