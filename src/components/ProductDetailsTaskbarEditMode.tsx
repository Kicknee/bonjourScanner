import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disable } from "../state/slices/editSlice";
import updateProduct from "../utils/updateProduct";
import { ProductType } from "../types/types";

const ProductDetailsTaskbarEditMode = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-3">
      <form
        id="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          const product = e.target as HTMLFormElement;
          const obj: Partial<ProductType> = {};

          for (let i = 0; i < 7; i++) {
            const { id, value } = product[i] as HTMLInputElement;
            obj[id] = value;
          }
          updateProduct(obj as ProductType);
          dispatch(disable());
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
          dispatch(disable());
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
