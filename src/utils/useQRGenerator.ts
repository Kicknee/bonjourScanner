import QRCode from "react-qr-code";
import useProductState from "../state/hooks/useProductState";
import { createElement } from "react";

export default function useQRGenerator() {
  const selectedProduct = JSON.stringify(
    { ...useProductState() },
    (key, value) => (key === "_id" ? undefined : value)
  );

  const qrElement = createElement(QRCode, {
    value: selectedProduct,
    className: "img-fluid",
  });

  return qrElement;
}
