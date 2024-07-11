import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disable } from "../state/slices/editSlice";

const ProductDetailsTaskbarEditMode = () => {
  const disableEditMode = useDispatch();

  return (
    <div className="col-3">
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x"
          icon={faFloppyDisk}
          style={{ color: "#ffffff" }}
        />
      </button>
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x"
          icon={faBan}
          style={{ color: "#ffffff" }}
          onClick={() => {
            disableEditMode(disable());
          }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarEditMode;
