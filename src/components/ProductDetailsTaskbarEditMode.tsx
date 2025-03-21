import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disableEdit } from "../store/slices/editSlice";
import updateProduct from "../services/updateProduct";
import { ProductType } from "../types/types";
import { fillProductListState } from "../store/slices/productListSlice";
import { selectProductState } from "../store/slices/productSlice";
import getProducts from "../services/getProducts";
import { triggerModal } from "../utils/triggerModal";
const ProductDetailsTaskbarEditMode = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-3">
      <form
        id="edit-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const product = e.target as HTMLFormElement;
          const productID = (product[0] as HTMLInputElement).dataset.id;
          const obj: Partial<ProductType> = {};

          for (let i = 0; i < 7; i++) {
            const { name, value } = product[i] as HTMLInputElement;
            obj[name] = name === "LEFT" ? Number(value) : value;
          }
          const response = await updateProduct(obj as ProductType);

          if (response == undefined) {
            triggerModal("Couldn't update the record");
            dispatch(disableEdit());
            return;
          } else {
            triggerModal("Successful update");
            dispatch(selectProductState(obj as ProductType));
            dispatch(disableEdit());
            const refreshedList = await getProducts();
            if (!refreshedList) {
              triggerModal("Couldn't refresh product list");
            } else {
              dispatch(fillProductListState(refreshedList));
            }
          }
          obj._id = productID;
        }}
      ></form>
      <button className="btn" form="edit-form">
        <FontAwesomeIcon
          className="fa-3x"
          icon={faFloppyDisk}
          style={{ color: "#fff" }}
        />
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(disableEdit());
        }}
      >
        <FontAwesomeIcon
          className="fa-3x"
          icon={faBan}
          style={{ color: "#fff" }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarEditMode;
