import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import { ProductType } from "../types/types";
import { fillProductListState } from "../store/slices/productListSlice";
import { selectProductState } from "../store/slices/productSlice";
import { triggerModal } from "../utils/triggerModal";
import productService from "../services/productService";
import { setMode } from "../store/slices/productStateSlice";
import { RootState } from "../store/store";

const ProductDetailsTaskbarFormMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.mode);

  if (mode !== "add" && mode !== "edit") return null;

  const formName = mode === "edit" ? "edit-form" : "add-form";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const obj: Partial<ProductType> = {};

    for (const [name, value] of formData.entries()) {
      if (name === "LEFT") {
        obj["LEFT"] = Number(value);
      } else if (name === "_id") {
        // Zakładamy, że _id to string z MongoDB
        obj["_id"] = value.toString() as any;
      } else {
        obj[name as keyof Omit<ProductType, "LEFT" | "_id">] = value
          .toString()
          .toUpperCase();
      }
    }

    try {
      if (mode === "add") {
        const response = await productService.add(obj as ProductType);
        if (!response || response.status >= 400) {
          triggerModal(response.message || "Couldn't add product");
        } else {
          triggerModal(response.message);
          const listResponse = await productService.get();
          if (listResponse.status >= 400) {
            triggerModal(
              listResponse.message || "Couldn't refresh product list"
            );
          } else {
            dispatch(fillProductListState(listResponse.payload));
          }
        }
      } else if (mode === "edit") {
        const productID = form
          .querySelector("input[name='_id']")
          ?.getAttribute("data-val");
        if (productID) obj._id = productID as any;

        const response = await productService.update(obj as ProductType);
        if (!response || response.status >= 400) {
          triggerModal(response.message || "Couldn't update product");
        } else {
          triggerModal(response.message);
          dispatch(selectProductState(obj as ProductType));
          const listResponse = await productService.get();
          if (listResponse.status >= 400) {
            triggerModal(
              listResponse.message || "Couldn't refresh product list"
            );
          } else {
            dispatch(fillProductListState(listResponse.payload));
          }
        }
      }

      dispatch(setMode("view"));
    } catch (err) {
      triggerModal("Unexpected error occurred.");
      dispatch(setMode("view"));
    }
  };

  const handleCancel = () => {
    dispatch(setMode("view"));
  };

  return (
    <div className="col-3">
      <form id={formName} onSubmit={handleSubmit}></form>

      <button className="btn" form={formName} type="submit">
        <FontAwesomeIcon
          className="fa-3x w-100"
          icon={faFloppyDisk}
          style={{ color: "#fff" }}
        />
      </button>

      <button className="btn" type="button" onClick={handleCancel}>
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
