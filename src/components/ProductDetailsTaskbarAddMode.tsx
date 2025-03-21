import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disableAdd } from "../store/slices/addSlice";
import addProduct from "../services/addProduct";
import { ProductType } from "../types/types";
import getProducts from "../services/getProducts";
import { fillProductListState } from "../store/slices/productListSlice";
import { triggerModal } from "../utils/triggerModal";
const ProductDetailsTaskbarAddMode = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-3">
      <form
        id="add-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const product = e.target as HTMLFormElement;
          const obj: Partial<ProductType> = {};

          for (let i = 0; i < 7; i++) {
            const { name, value } = product[i] as HTMLInputElement;
            obj[name] = name === "LEFT" ? Number(value) : value;
          }
          const response = await addProduct(obj as ProductType);
          console.log(response);
          if (!response) {
            triggerModal("Couldn't add the record");
            dispatch(disableAdd());
            return;
          } else {
            triggerModal("A new record has been added");
            dispatch(disableAdd());
            const refreshedList = await getProducts();
            if (!refreshedList) {
              triggerModal("Couldn't refresh product list");
            } else {
              dispatch(fillProductListState(refreshedList));
            }
          }
        }}
      ></form>
      <button className="btn" form="add-form" type="submit">
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faFloppyDisk}
          style={{ color: "#fff" }}
        />
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(disableAdd());
        }}
      >
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faBan}
          style={{ color: "#fff" }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarAddMode;
