import ProductRecord from "./ProductRecord";
import { ProductType } from "../types/types";
import { useProducts } from "../store/hooks/useProducts";

const ProductList = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error || !Array.isArray(data?.payload))
    return <div>Error loading product list.</div>;

  const productList: ProductType[] = data.payload;

  return (
    <div className="table-container">
      <table
        className="table table-borderless table-hover table-dark"
        style={{ tableLayout: "fixed", width: "100%" }}
      >
        <thead>
          <tr>
            <th style={{ width: "20%" }}>STYLE</th>
            <th style={{ width: "40%" }}>TYPE</th>
            <th style={{ width: "20%" }}>PLACE</th>
            <th style={{ width: "20%" }}>LEFT</th>
          </tr>
        </thead>
        <tbody>
          {productList.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center">
                Not found
              </td>
            </tr>
          ) : (
            productList.map((product: ProductType, key: number) => (
              <ProductRecord key={key} productProp={product} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
