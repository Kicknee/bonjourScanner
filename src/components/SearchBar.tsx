import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { disable } from "../state/slices/editSlice";
import { enableAdd } from "../state/slices/addSlice";
import { ChangeEvent, useEffect, useState } from "react";
import useFindProduct from "../utils/useFindProduct";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const val = event.target.value.trim().toUpperCase();
    setInput(val);
  }

  useEffect(() => {
    useFindProduct(input);
  }, [input]);

  return (
    <div className="search-bar mb-4 d-flex align-items-center">
      <input
        type="text"
        className="opacity-75 w-75 border-0 bg-input-color h-100 p-3 text-uppercase"
        placeholder="STYLE"
        value={input}
        onChange={handleChange}
      />
      <button
        className="btn"
        onClick={() => {
          dispatch(enableAdd());
          dispatch(disable());
        }}
      >
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#ffffff" }}
          className="fa-2x"
        />
      </button>
      <button className="btn">
        <FontAwesomeIcon
          icon={faPowerOff}
          className="fa-2x"
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  );
};

export default SearchBar;
