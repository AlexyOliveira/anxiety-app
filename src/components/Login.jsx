import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("anxietappname");
    if (userName) {
      navigate("home");
    } else {
      setIsLoading(false);
    }
  }, []);
  const loginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("anxietappname", inputValue);
    navigate("home");
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
    <div>
      {isLoading ? (
        <div className="spinner-border m-5 text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <form action="" onSubmit={loginSubmit}>
          <h1>Olá, Qual é o seu nome</h1>
          <input value={inputValue} onChange={handleInput} type="text" />
          <br />
          <button disabled={isDisabled} type="submit">
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
