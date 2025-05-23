import QRCode from "react-qr-code";
import useProductState from "../store/hooks/useProductState";
import { createElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function QRGenerator() {
  const { mode } = useSelector((state: RootState) => state.mode);

  const selectedProduct = useProductState();

  const qrValue =
    mode === "add"
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
