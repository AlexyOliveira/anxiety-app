import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/1.png";
import "./Login.css";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("anxietappname");
    if (userName) {
      navigate("/home");
    } else {
      setIsLoading(false);
    }
  }, []);
  const loginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("anxietappname", inputValue);
    navigate("/home");
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    if (inputValue.length >= 3) {
      setIsDisabled(false);
    } else if (inputValue.length < 3) {
      setIsDisabled(true);
    }
  };
  return (
    <div className="login-container">
      {isLoading ? (
        <div className="spinner-border m-5 text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
        <div className="logo-circle">
          <img className="logo" src={logo} alt="logo" />
        </div>
          
          <form action="" onSubmit={loginSubmit}>
            <input
              value={inputValue}
              onChange={handleInput}
              type="text"
              maxLength={12}
              placeholder="Digite seu nome"
            />
            <br />
            <button className=" login-btn btn btn-dark" disabled={isDisabled} type="submit">
              Entrar
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
