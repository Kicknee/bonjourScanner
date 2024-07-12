import useQRGenerator from "../utils/useQRGenerator";

const ProductQR = () => {
  console.log(JSON.parse(useQRGenerator().props.value));

  return <div className="col-9">{useQRGenerator()}</div>;
};

export default ProductQR;
