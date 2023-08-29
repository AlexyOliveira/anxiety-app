import "./About.css";
import React from "react";
import adv from "../images/adv.png";

function About() {
  return (
    <div className="about-container">
      <img src={adv} alt="adv" />
      <div className="names">
        <p>Amanda Alves De Oliveira</p>
        <p>Cauã Machado Berlitz</p>
        <p>Gabriela Machado</p>
        <p>Giovanna Montiel Fialho</p>
        <p>Lucas Inácio De Oliveira Lemos</p>
        <h1>SAUDE MENTAL: ANSIEDADE</h1>
        <h4>Osório</h4>
        <h5>2023</h5>
      </div>
    </div>
  );
}

export default About;
