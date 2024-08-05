import QRCode from "react-qr-code";
import useProductState from "../state/hooks/useProductState";
import { createElement } from "react";
import useAddState from "../state/hooks/useAddState";

export default function useQRGenerator() {
  const addMode = useAddState();

  const selectedProduct = JSON.stringify(
    { ...useProductState() },
    (key, value) => (key === "_id" ? undefined : value)
  );

  if (addMode) return;

  const qrElement = createElement(
    "div",
    {
      className: "quiet-zone p-2 bg-light text-center",
      style: { width: "200px" },
    },
    createElement(QRCode, {
      value: selectedProduct,
      className: "img-fluid",
    })
  );

  return qrElement;
}
