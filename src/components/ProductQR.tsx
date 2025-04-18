import QRCode from "react-qr-code";
import useProductState from "../store/hooks/useProductState";
import { createElement } from "react";
import useAddState from "../store/hooks/useAddState";

function QRGenerator() {
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
      style: { width: "210px", marginLeft: "10px" },
    },
    createElement(QRCode, {
      value: qrValue,
      className: "img-fluid",
    })
  );

  return qrElement;
}

const ProductQR = () => {
  return <div className="col-9">{QRGenerator()}</div>;
};

export default ProductQR;
