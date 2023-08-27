import React from "react";
import "./Footer.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    localStorage.removeItem("anxietappname");
    navigate("/");
  };
  return (
    <footer>
      {location.pathname === "/home" && (
        <i
          onClick={handleClick}
          style={{ color: "black" }}
          className="rotated-div fa-solid fa-arrow-right-from-bracket"
        />
      )}

      <Link to="/home">
        <i style={{ color: "black" }} className="fa-solid fa-house" />
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <div className="about">SOBRE</div>
      </Link>
    </footer>
  );
}

export default Footer;
