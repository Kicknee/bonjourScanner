import LogoContainer from "../LogoContainer";
import SearchBar from "../SearchBar";
import ProductList from "../ProductList";
import useProductState from "../../store/hooks/useProductState";
import Product from "../Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deselectProductState } from "../../store/slices/productSlice";
import useAddState from "../../store/hooks/useAddState";
import { disableAdd } from "../../store/slices/addSlice";

const CenterSide = () => {
  const { _id: currentProductID } = useProductState();
  const addMode = useAddState();
  const dispatch = useDispatch();

  return (
    <div className="col-12">
      <div className="row justify-content-center">
        <div className="col-9 text-center">
          <LogoContainer />
        </div>
      </div>
      <SearchBar />
      {!currentProductID && !addMode ? (
        <ProductList />
      ) : (
        <div className="col-11 position-relative">
          <button
            className="btn not-hover"
            onClick={() => {
              if (currentProductID) {
                dispatch(deselectProductState());
              }
              if (addMode) {
                dispatch(disableAdd());
              }
            }}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="position-absolute end-0 fa-2x text-cancel-color"
            />
          </button>
          <Product />
        </div>
      )}
    </div>
  );
};

export default CenterSide;
