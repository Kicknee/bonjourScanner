import SearchBar from "../SearchBar";
import Product from "../Product";
import useProductState from "../../state/hooks/useProductState";

const RightSide = () => {
  const selected_product = useProductState();

  return (
    <div className="col-6">
      <SearchBar />
      {selected_product._id && <Product />}
    </div>
  );
};

export default RightSide;
