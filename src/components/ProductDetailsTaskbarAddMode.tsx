import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disableAdd } from "../state/slices/addSlice";
import addProduct from "../utils/addProduct";
import { ProductType } from "../types/types";

const ProductDetailsTaskbarAddMode = () => {
  const disableAddMode = useDispatch();

  return (
    <div className="col-3">
      <form
        id="add-form"
        onSubmit={(e) => {
          e.preventDefault();
          const product = e.target as HTMLFormElement;
          const obj: Partial<ProductType> = {};

          for (let i = 0; i < 7; i++) {
            const { id, value } = product[i] as HTMLInputElement;
            obj[id] = value;
          }
          addProduct(obj as ProductType);
        }}
      ></form>
      <button className="btn" form="add-form">
        <FontAwesomeIcon
          className="fa-3x"
          icon={faFloppyDisk}
          style={{ color: "#ffffff" }}
        />
      </button>
      <button
        className="btn"
        onClick={() => {
          disableAddMode(disableAdd());
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

export default ProductDetailsTaskbarAddMode;
