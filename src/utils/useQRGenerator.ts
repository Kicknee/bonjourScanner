import QRCode from "react-qr-code";
import useProductState from "../state/hooks/useProductState";
import { createElement } from "react";

export default function useQRGenerator() {
  const selectedProduct = JSON.stringify(
    { ...useProductState() },
    (key, value) => (key === "_id" ? undefined : value)
  );

  const qrElement = createElement(
    "div",
    {
      className: "quiet-zone p-2 bg-light",
    },
    createElement(QRCode, {
      value: selectedProduct,
      className: "img-fluid",
    })
  );

  return qrElement;
}
