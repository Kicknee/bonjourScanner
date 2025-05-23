import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";

import {
  setSearchListState,
  resetSearchListState,
} from "../store/slices/searchListSlice";
import useProductListState from "../store/hooks/useProductListState";
import { setMode } from "../store/slices/productStateSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const currentList = useProductListState();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value.trim().toUpperCase();
    setInput(val);
  };

  useEffect(() => {
    findProduct();
  }, [input]);

  const findProduct = () => {
    if (!input) {
      dispatch(resetSearchListState());
      return;
    }

    const searchList = currentList.filter((product) =>
      product.STYLE.includes(input)
    );
    dispatch(setSearchListState(searchList));
  };

  const handleAddClick = () => {
    dispatch(setMode("add"));
  };

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <div className="search-bar mb-4 d-flex align-items-center">
      <input
        type="text"
        className="opacity-75 w-75 border-0 bg-input-color h-100 p-3 text-uppercase"
        placeholder="STYLE"
        value={input}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleAddClick}>
        <FontAwesomeIcon
          icon={faPlus}
          className="fa-2x"
          style={{ color: "#ffffff" }}
        />
      </button>
      <button className="btn" onClick={handleReloadClick}>
        <FontAwesomeIcon
          icon={faArrowsRotate}
          className="fa-2x"
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  );
};

export default SearchBar;
