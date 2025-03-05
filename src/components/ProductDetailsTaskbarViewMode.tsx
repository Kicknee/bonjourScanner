import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { enableEdit } from "../store/slices/editSlice";
import deleteProduct from "../services/deleteProduct";
import useProductState from "../store/hooks/useProductState";
import { ProductType } from "../types/types";
import { fillProductListState } from "../store/slices/productListSlice";
import { deselectProductState } from "../store/slices/productSlice";
import getProducts from "../services/getProducts";
import { messageModalState, showModalState } from "../store/slices/modalSlice";

const ProductDetailsTaskbarViewMode = () => {
  const dispatch = useDispatch();

  const currentProduct = useProductState();

  return (
    <div className="col-3">
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faPenToSquare}
          style={{ color: "#ffffff" }}
          onClick={() => {
            dispatch(enableEdit());
          }}
        />
      </button>
      <button className="btn">
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faTrash}
          style={{ color: "#ffffff" }}
          onClick={() => {
            (async () => {
              const response = await deleteProduct(
                currentProduct as ProductType
              );
              if (!response) {
                dispatch(messageModalState("Couldn't delete the record"));
                dispatch(showModalState(true));
              } else {
                dispatch(messageModalState("Successful delete"));
                dispatch(showModalState(true));
                dispatch(deselectProductState());
                const refreshedList = await getProducts();
                if (!refreshedList) {
                  dispatch(messageModalState("Couldn't refresh product list"));
                  dispatch(showModalState(true));
                } else {
                  dispatch(fillProductListState(refreshedList));
                }
              }
            })();
          }}
        />
      </button>
    </div>
  );
};

export default ProductDetailsTaskbarViewMode;
