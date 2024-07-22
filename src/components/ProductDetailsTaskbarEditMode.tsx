import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disableEdit } from "../state/slices/editSlice";
import updateProduct from "../utils/updateProduct";
import { ProductType } from "../types/types";
import { fillProductListState } from "../state/slices/productListSlice";
import { selectProductState } from "../state/slices/productSlice";
import getProducts from "../utils/getProducts";
import { messageModalState, showModalState } from "../state/slices/modalSlice";
const ProductDetailsTaskbarEditMode = () => {
  const dispatch = useDispatch();

  return (
    <div className="col-3">
      <form
        id="edit-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const product = e.target as HTMLFormElement;
          const productID = product[0].dataset.id;
          const obj: Partial<ProductType> = {};

          for (let i = 0; i < 7; i++) {
            const { id, value } = product[i] as HTMLInputElement;
            obj[id] = value;
          }
          const response = await updateProduct(obj as ProductType);
          if (!response) {
            console.log(response);
            // alert("Couldn't update");
            dispatch(messageModalState("Couldn't update the record"));
            dispatch(showModalState(true));
            dispatch(disableEdit());
            return;
          } else {
            // alert("Successful update");
            dispatch(messageModalState("Successful update"));
            dispatch(showModalState(true));
            dispatch(selectProductState(obj as ProductType));
            dispatch(disableEdit());
            const refreshedList = await getProducts();
            if (!refreshedList) {
              // alert("Couldn't refresh product list");
              dispatch(messageModalState("Couldn't refresh product list"));
              dispatch(showModalState(true));
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
          style={{ color: "#ffffff" }}
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
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarEditMode;
