import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import qrImg from "../assets/download.png";

const ProductDetailsTaskbar = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-7">
        <div className="row align-items-end justify-content-around">
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
          <div className="col-9">
            <img src={qrImg} className="img-fluid" alt="qr-code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTaskbar;
