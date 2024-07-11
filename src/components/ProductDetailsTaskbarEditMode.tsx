import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";

const ProductDetailsTaskbarEditMode = () => {
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
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarEditMode;
