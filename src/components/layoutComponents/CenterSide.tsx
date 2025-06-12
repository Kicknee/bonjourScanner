import LogoContainer from "../LogoContainer";
import SearchBar from "../SearchBar";
import ProductList from "../ProductList";
import Product from "../Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deselectProductState } from "../../store/slices/productSlice";
import { RootState } from "../../store/store";
import { setMode } from "../../store/slices/productModeSlice";

const CenterSide = () => {
  const { mode } = useSelector((state: RootState) => state.mode);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(deselectProductState());
    dispatch(setMode("idle"));
  };

  return (
    <div className="col-12">
      <div className="row justify-content-center">
        <div className="col-9 text-center">
          <LogoContainer />
        </div>
      </div>
      <SearchBar />
      {mode === "idle" ? (
        <ProductList />
      ) : (
        <div className="col-11 d-flex flex-column align-items-center">
          <button
            className="btn not-hover align-self-end"
            onClick={handleClose}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="fa-2x text-cancel-color"
            />
          </button>
          <Product />
        </div>
      )}
    </div>
  );
};

export default CenterSide;
