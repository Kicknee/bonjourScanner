import { useState } from "react";
import logo from "../assets/bonjour-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [input, setInput] = useState("");

  return (
    <div className="row h-50 align-items-center">
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <img className="logo img-fluid" src={logo} alt="Bonjour Logo" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form
              action="javascript:void(0);"
              className="d-flex justify-content-center h-75"
            >
              <input
                type="text"
                className="opacity-75 w-75 border-0 bg-input-color p-3"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder="Password"
              />
              <button className="btn">
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  style={{ color: "#ffffff" }}
                  className="h-100"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
