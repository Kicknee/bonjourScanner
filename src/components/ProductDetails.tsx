import ProductDetailsTaskbar from "./ProductDetailsTaskbar";

const ProductDetails = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-9">
            <table className="table table-dark table-borderless text-siz fs-5">
              <tbody>
                <tr>
                  <th>STYLE</th>
                  <th>A1B23</th>
                </tr>
                <tr>
                  <th>TYPE</th>
                  <th>KURTKA</th>
                </tr>
                <tr>
                  <th>PLACE</th>
                  <th>D5</th>
                </tr>
                <tr>
                  <th>LEFT</th>
                  <th>85</th>
                </tr>
                <tr>
                  <th>COLOR</th>
                  <th>CZERWONY</th>
                </tr>
                <tr>
                  <th>BRAND</th>
                  <th>H@M</th>
                </tr>
                <tr>
                  <th>SHIPPING COMPANY</th>
                  <th>ARTUR LLC.</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ProductDetailsTaskbar />
      </div>
    </div>
  );
};

export default ProductDetails;
