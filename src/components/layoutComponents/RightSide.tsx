import SearchBar from "../SearchBar";
import ProductDetails from "../ProductDetails";
import Product from "../Product";

const RightSide = () => {
  // const current_state = useProductState;

  return (
    <div className="col-6">
      <SearchBar />
      {/* {current_state._id && <Product product={current_state} />} */}
    </div>
  );
};

export default RightSide;
