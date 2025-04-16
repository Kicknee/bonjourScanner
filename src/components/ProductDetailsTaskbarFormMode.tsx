import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

// Import actions and services for both modes
import { disableAdd } from "../store/slices/addSlice";
import { disableEdit } from "../store/slices/editSlice";
import addProduct from "../services/addProduct";
import updateProduct from "../services/updateProduct";
import { ProductType } from "../types/types";
import getProducts from "../services/getProducts";
import { fillProductListState } from "../store/slices/productListSlice";
import { selectProductState } from "../store/slices/productSlice";
import { triggerModal } from "../utils/triggerModal";

// Define the prop types for the combined taskbar component
interface ProductDetailsTaskbarProps {
  mode: "add" | "edit";
}

const ProductDetailsTaskbarFormMode = ({
  mode,
}: ProductDetailsTaskbarProps) => {
  const dispatch = useDispatch();

  // Determine the form id based on the mode
  const formName = mode === "edit" ? "edit-form" : "add-form";

  // Handler for form submission (both add and edit)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const obj: Partial<ProductType> = {};

    // Loop through the 7 input fields to build the product object
    for (let i = 0; i < 7; i++) {
      const { name, value } = form[i] as HTMLInputElement;
      obj[name] = name === "LEFT" ? Number(value) : value;
    }

    if (mode === "add") {
      // Perform add operation for new product
      const response = await addProduct(obj as ProductType);
      console.log(response, typeof response);
      if (!response) {
        triggerModal("Couldn't add the  record");
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
    } else if (mode === "edit") {
      // Extract the product ID from the first input field's data attribute
      const productID = (form[0] as HTMLInputElement).dataset.id;
      // Perform update operation for existing product
      const response = await updateProduct(obj as ProductType);

      if (response === undefined) {
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
      // Assign the product ID to the product object (if needed later)
      obj._id = productID;
    }
  };

  return (
    <div className="col-3">
      {/* The form has a dynamic id based on the mode */}
      <form id={formName} onSubmit={handleSubmit}></form>

      {/* Submit button: when clicked, it triggers the submit event of the dynamic form */}
      <button className="btn" form={formName} type="submit">
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faFloppyDisk}
          style={{ color: "#fff" }}
        />
      </button>

      {/* Cancel button: dispatches the proper action to disable the current mode */}
      <button
        className="btn"
        onClick={() => {
          if (mode === "add") {
            dispatch(disableAdd());
          } else if (mode === "edit") {
            dispatch(disableEdit());
          }
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

export default ProductDetailsTaskbarFormMode;
