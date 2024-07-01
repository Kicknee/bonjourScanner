import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import qrImg from "../assets/download.png";

const ProductDetails = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-9">
            <table className="table table-dark table-borderless text-siz fs-5">
              <tbody>
                <tr>
                  <th>STYLE</th>
                  <th>A1B23</th>
                </tr>
                <tr>
                  <th>TYPE</th>
                  <th>KURTKA</th>
                </tr>
                <tr>
                  <th>PLACE</th>
                  <th>D5</th>
                </tr>
                <tr>
                  <th>LEFT</th>
                  <th>85</th>
                </tr>
                <tr>
                  <th>COLOR</th>
                  <th>CZERWONY</th>
                </tr>
                <tr>
                  <th>BRAND</th>
                  <th>H@M</th>
                </tr>
                <tr>
                  <th>SHIPPING COMPANY</th>
                  <th>ARTUR LLC.</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default ProductDetails;
