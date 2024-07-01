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
      </div>
    </div>
  );
};

export default Login;
