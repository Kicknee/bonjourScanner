import ProductDetailsTaskbarViewMode from "./ProductDetailsTaskbarViewMode";
import ProductQR from "./ProductQR";
import { FC } from "react";
import { AddType, EditType } from "../types/types";
import ProductDetailsTaskbarForm from "./ProductDetailsTaskbarForm";

const ProductDetailsTaskbar: FC<{ editMode: EditType; addMode: AddType }> = ({
  editMode,
  addMode,
}) => {
  return (
    <div className="product-taskbar row justify-content-center justify-content-lg-end">
      <div className="col-7">
        <div className="row align-items-end">
          {editMode && !addMode && <ProductDetailsTaskbarForm mode="edit" />}
          {!editMode && !addMode && <ProductDetailsTaskbarViewMode />}
          {addMode && <ProductDetailsTaskbarForm mode="add" />}
          <ProductQR />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTaskbar;
