const ProductDetailsViewMode = ({ product }) => {
  return (
    <div className="row my-3 justify-content-center">
      <div className="col-9">
        <table className=" table table-dark table-borderless text-siz fs-5">
          <tbody>
            {Object.entries(product)
              .slice(1)
              .map((arr) => {
                let value = arr;
                if (arr[0] == "SHIPPING_COMPANY") value[0] = "SHIPPING COMPANY";

                return (
                  <tr key={arr[0]}>
                    <th>{value[0]}</th>
                    <th>{value[1]}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsViewMode;
