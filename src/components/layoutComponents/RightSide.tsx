import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const RightSide = () => {
  return (
    <div className="col-7">
      <div
        className="search-bar d-flex justify-content-center align-items-center bg-danger"
        style={{ height: "50px" }}
      >
        <input type="text" className="w-75" />
        <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
        <FontAwesomeIcon icon={faPowerOff} style={{ color: "#ffffff" }} />
      </div>
    </div>
  );
};

export default RightSide;
