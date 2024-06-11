import React, { useState } from "react";
import logo from "../assets/bonjour-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Login = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <img src={logo} alt="Bonjour Logo" />
      <form action="javascript:void(0);">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter Password"
        />
        <button>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      </form>
    </div>
  );
};

export default Login;
