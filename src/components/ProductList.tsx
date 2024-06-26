import ProductRecord from "./ProductRecord";

const ProductList = () => {
  const quantity = new Array(15).fill(2);

  return (
    <div className="table-container">
      <table className="table m-0 table-borderless table-dark">
        <thead>
          <tr>
            <th>STYLE</th>
            <th>TYPE</th>
            <th>PLACE</th>
            <th>LEFT</th>
          </tr>
        </thead>
      </table>
      <div className="tbody-wrapper">
        <table className="table table-borderless table-hover table-dark">
          <thead>
            <tr>
              <th>STYLE</th>
              <th>TYPE</th>
              <th>PLACE</th>
              <th>LEFT</th>
            </tr>
          </thead>
          <tbody>
            {quantity.map(() => (
              <ProductRecord />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
