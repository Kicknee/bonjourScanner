import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";

import { ProductType, ResponseType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";
import { triggerModal } from "../utils/triggerModal";
import { deselectProductState } from "../store/slices/productSlice";
import { setMode } from "../store/slices/productModeSlice";
import ProductQR from "./ProductQR";
import { useAddProduct, useUpdateProduct } from "../store/hooks/useProducts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  mode: "add" | "edit";
  productProp?: ProductType;
}

const BaseProductSchema = z.object({
  STYLE: z
    .string()
    .length(5, { message: "STYLE must have 5 characters" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Field can contain only letters and numbers",
    }),
  TYPE: z
    .string()
    .nonempty({ message: "TYPE is required" })
    .max(20, { message: "Field can have at most 20 characters" })
    .regex(/^[a-zA-Z0-9!\/\- ]+$/, {
      message: "Field can contain only letters and numbers",
    }),
  PLACE: z
    .string()
    .length(3, { message: "STYLE must have 5 characters" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Field can contain only letters and numbers",
    }),
  LEFT: z
    .number()
    .max(10000, { message: "LEFT value can't exceed 10000 units" }),
  COLOR: z
    .string()
    .nonempty({ message: "COLOR is required" })
    .max(10, { message: "COLOR can have at most 10 characters" })
    .regex(/^[a-zA-Z0-9 ]+$/, {
      message: "Field can contain only letters and numbers",
    }),
  BRAND: z
    .string()
    .nonempty({ message: "COLOR is required" })
    .max(20, { message: "COLOR can have at most 20 characters" })
    .regex(/^[a-zA-Z0-9!\/\- ]+$/, {
      message: "Field can contain only letters and numbers",
    }),
  SHIPPING_COMPANY: z
    .string()
    .nonempty({ message: "COLOR is required" })
    .max(20, { message: "COLOR can have at most 20 characters" })
    .regex(/^[a-zA-Z0-9!\/\- ]+$/, {
      message: "Field can contain only letters and numbers",
    }),
});

// get schema with or without _id based on mode (add | edit)

const getProductSchema = (mode: Props["mode"]) => {
  switch (mode) {
    case "add":
      return BaseProductSchema;
    case "edit":
      return BaseProductSchema.extend({
        _id: z
          .string()
          .length(24)
          .regex(/^[a-fA-F0-9]{24}$/)
          .optional(),
      });
    default:
      const _unreachable: never = mode;
      return _unreachable;
  }
};

const ProductFormContainer = ({ mode, productProp }: Props) => {
  const dispatch = useDispatch();
  const inputFields: (keyof ProductType)[] = [
    "_id",
    "STYLE",
    "TYPE",
    "PLACE",
    "LEFT",
    "COLOR",
    "BRAND",
    "SHIPPING_COMPANY",
  ];
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(getProductSchema(mode)),
    defaultValues: productProp && productProp,
  });

  const mutation = mode === "add" ? addProduct : updateProduct;

  const onValid = async (data: ProductType) => {
    try {
      const response: ResponseType = await mutation.mutateAsync(data);
      triggerModal(response.message);
      dispatch(setMode("idle"));
      dispatch(deselectProductState());
    } catch (error) {
      triggerModal("Unexpected error occurred.");
      dispatch(setMode("idle"));
    }
  };

  const onInvalid = (formErrors: typeof errors) => {
    const firstError = Object.values(formErrors)[0];
    if (firstError.message) {
      triggerModal(firstError.message);
    }
  };
  const handleCancel = () => {
    dispatch(setMode("view"));
  };

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="col-9 d-flex flex-column align-items-end mx-auto"
    >
      <table className="table table-dark table-borderless fs-5 product-details-table">
        <tbody>
          {inputFields.map((key) => {
            if (key === "_id") return null;
            const { displayKey } = examineEntries(key);
            return (
              <tr key={key} style={{ height: "48px" }}>
                <th>{displayKey}</th>
                <th>
                  <input
                    id={key}
                    type={key === "LEFT" ? "number" : "text"}
                    {...register(
                      key,
                      key === "LEFT" ? { valueAsNumber: true } : {}
                    )}
                    className={
                      "opacity-75 border-0 h-50 p-1 text-uppercase " +
                      (key === "STYLE" && mode === "edit"
                        ? "bg-transparent text-text-color"
                        : "bg-input-color")
                    }
                    autoCapitalize="on"
                    readOnly={key === "STYLE" && mode === "edit"}
                    maxLength={20}
                    style={{ width: "150px" }}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="col-9 d-flex gap-2 mt-3">
        <div className="d-flex flex-column justify-content-end">
          <button className="btn" type="submit">
            <FontAwesomeIcon
              className="fa-3x"
              icon={faFloppyDisk}
              style={{ color: "#fff" }}
            />
          </button>
          <button className="btn" type="button" onClick={handleCancel}>
            <FontAwesomeIcon
              className="fa-3x"
              icon={faBan}
              style={{ color: "#fff" }}
            />
          </button>
        </div>
        <ProductQR />
      </div>
    </form>
  );
};

export default ProductFormContainer;
