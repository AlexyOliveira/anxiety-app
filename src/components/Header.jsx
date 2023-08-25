import React, { useEffect, useState } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import logo from "../images/1-header.png";

function Header() {
  const location = useLocation();
  const [name, setName] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("anxietappname");
    setName(userName);
  }, []);
  return (
    <>
      {location.pathname === "/home" ? (
        <header>
          <div className="logo-circle-header">
            <img className="logo" src={logo} alt="logo" />
          </div>
          Olá {name}!
        </header>
      ) : location.pathname === "/techniques" ? (
        <header>
          {" "}
          <div className="logo-circle-header">
            <img className="logo" src={logo} alt="logo" />
          </div>
          Técnicas
        </header>
      ) : location.pathname === "/frases" ? (
        <header>
          {" "}
          <div className="logo-circle-header">
            <img className="logo" src={logo} alt="logo" />
          </div>
          Frases
        </header>
      ) : location.pathname === "/to-do-list" ? (
        <header>
          {" "}
          <div className="logo-circle-header">
            <img className="logo" src={logo} alt="logo" />
          </div>
          Lista de tarefas
        </header>
      ) : location.pathname === "/games" ? (
        <header>
          {" "}
          <div className="logo-circle-header">
            <img className="logo" src={logo} alt="logo" />
          </div>
          Jogos
        </header>
      ) : null}
    </>
  );
}

export default Header;
