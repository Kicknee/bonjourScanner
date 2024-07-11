import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductDetailsTaskbarViewMode = () => {
  return (
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
  );
};

export default ProductDetailsTaskbarViewMode;
