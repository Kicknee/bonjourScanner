import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePen,
  faTrash,
  faFloppyDisk,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import ProductQR from "./ProductQR";

const ProductDetailsTaskbar = ({ editMode }) => {
  return (
    <div className="row justify-content-end">
      <div className="col-7">
        <div className="row align-items-end justify-content-around">
          {editMode ? (
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
          ) : (
            <div className="col-3">
              <button className="btn">
                <FontAwesomeIcon
                  className="fa-3x"
                  icon={faFilePen}
                  style={{ color: "#ffffff" }}
                />
              </button>
              <button className="btn">
                <FontAwesomeIcon
                  className="fa-3x"
                  icon={faTrash}
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          )}
          <ProductQR />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTaskbar;
