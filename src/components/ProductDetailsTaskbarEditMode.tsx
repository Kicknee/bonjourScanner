import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disable } from "../state/slices/editSlice";
import updateProduct from "../utils/updateProduct";

const ProductDetailsTaskbarEditMode = () => {
  const disableEditMode = useDispatch();

  return (
    <div className="col-3">
      <form
        id="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          updateProduct(e.target);
        }}
      ></form>
      <button className="btn" form="edit-form">
        <FontAwesomeIcon
          className="fa-3x"
          icon={faFloppyDisk}
          style={{ color: "#ffffff" }}
        />
      </button>
      <button
        className="btn"
        onClick={() => {
          disableEditMode(disable());
        }}
      >
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
