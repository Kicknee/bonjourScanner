import { ChangeEvent, useRef, useState } from "react";
import { ProductType } from "../types/types";
import { examineEntries } from "../utils/examineEntries";

interface ProductDetailsFormProps {
  mode: "add" | "edit";
  initialProduct?: ProductType;
}

const ProductDetailsForm = ({
  mode,
  initialProduct,
}: ProductDetailsFormProps) => {
  const defaultInput: ProductType = {
    STYLE: "",
    TYPE: "",
    PLACE: "",
    LEFT: 0,
    COLOR: "",
    BRAND: "",
    SHIPPING_COMPANY: "",
  };

  // Inicjujemy stan – jeżeli w trybie edycji przekazano produkt, wykorzystujemy jego dane,
  // w przeciwnym razie ustawiamy domyślne wartości.
  const [input, setInput] = useState<ProductType>(
    initialProduct ? { ...initialProduct } : defaultInput
  );
  const _id = useRef<any>({});

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    // Dla pola LEFT sprawdzamy, czy wartość jest liczbą całkowitą
    if (id === "LEFT" && !Number.isInteger(Number(value))) return;

    setInput((prev) => ({
      ...prev,
      [id]: id === "LEFT" ? Math.max(0, Number(value)) : value.toUpperCase(),
    }));
  }

  // W zależności od trybu ustawiamy atrybut form – może mieć różne nazwy
  const formName = mode === "edit" ? "edit-form" : "add-form";

  return (
    <div className="row justify-content-center">
      <div className="col-9">
        <table className="table table-dark table-borderless fs-5">
          <tbody>
            {Object.entries(input).map(([key, val]) => {
              // W trybie edycji pole _id pomijamy przy renderowaniu, ale możemy je zapisać
              if (key === "_id") {
                _id.current = val;
                return null;
              }
              const { displayKey } = examineEntries(key);

              return (
                <tr key={key} style={{ height: "48px" }}>
                  <th>{displayKey}</th>
                  <th>
                    <input
                      form={formName}
                      id={key}
                      name={key}
                      data-id={_id.current}
                      className={
                        "opacity-75 border-0 h-50 p-1 text-uppercase " +
                        (key === "STYLE" && mode === "edit"
                          ? "bg-transparent text-text-color"
                          : "bg-input-color")
                      }
                      type={key === "LEFT" ? "number" : "text"}
                      autoCapitalize="on"
                      value={input[key as keyof ProductType]!.toString()}
                      onChange={handleInput}
                      required
                      // W trybie edycji pole STYLE ustawione jako readOnly
                      readOnly={key === "STYLE" && mode === "edit"}
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsForm;
