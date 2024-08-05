import QRCode from "react-qr-code";
import useProductState from "../state/hooks/useProductState";
import { createElement } from "react";
import useAddState from "../state/hooks/useAddState";

export default function useQRGenerator() {
  const addMode = useAddState();

  const selectedProduct = useProductState();

  const qrValue = addMode
    ? "{}"
    : JSON.stringify({ ...selectedProduct }, (key, value) =>
        key === "_id" ? undefined : value
      );
  const qrElement = createElement(
    "div",
    {
      className: "quiet-zone p-2 bg-light text-center",
      style: { width: "210px" },
    },
    createElement(QRCode, {
      value: qrValue,
      className: "img-fluid",
    })
  );

  return qrElement;
}
