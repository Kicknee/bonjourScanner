import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const RightSide = () => {
  return (
    <div className="col-7">
      <div
        className="search-bar d-flex justify-content-around align-items-center"
        style={{ height: "50px" }}
      >
        <input
          type="text"
          className="opacity-75 w-75 bg-input-color h-100 p-3 text-uppercase"
        />
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#ffffff" }}
          className="h-100"
        />
        <FontAwesomeIcon
          icon={faPowerOff}
          className="h-100"
          style={{ color: "#ffffff" }}
        />
      </div>
    </div>
  );
};

export default RightSide;
