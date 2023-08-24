import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/home">
        <i style={{ color: "black" }} class="fa-solid fa-house" />
      </Link>
    </footer>
  );
}

export default Footer;
