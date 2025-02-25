import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disableAdd } from "../state/slices/addSlice";
import addProduct from "../utils/addProduct";
import { ProductType } from "../types/types";
import { messageModalState, showModalState } from "../state/slices/modalSlice";
import getProducts from "../utils/getProducts";
import { fillProductListState } from "../state/slices/productListSlice";
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
            dispatch(messageModalState("Already exists"));
            dispatch(showModalState(true));
            dispatch(disableAdd());
            return;
          } else {
            dispatch(messageModalState("A new record has been added"));
            dispatch(showModalState(true));
            dispatch(disableAdd());
            const refreshedList = await getProducts();
            if (!refreshedList) {
              dispatch(messageModalState("Couldn't refresh product list"));
              dispatch(showModalState(true));
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
