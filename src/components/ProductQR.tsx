import useQRGenerator from "../utils/useQRGenerator";

const ProductQR = () => {
  return <div className="col-9">{useQRGenerator()}</div>;
};

export default ProductQR;
