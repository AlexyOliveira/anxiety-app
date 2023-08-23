import React, { useEffect, useState } from "react";
import "./Home.css";
import tecnic from "../images/tecnic.png";
import frases from "../images/frases.jpeg";
import soms from "../images/soms.avif";
import Footer from "./Footer";

function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("anxietappname");
    setName(userName);
  }, []);
  return (
    <div className="home-container">
      <h1>Olá {name}!</h1>
      <div class="cardd">
        <div class="circle">
          <img src={tecnic} alt="Imagem" />
        </div>
        <div class="description">
          <p>TÉCNICAS</p>
        </div>
      </div>
      <div class="cardd">
        <div class="circle">
          <img src={frases} alt="Imagem" />
        </div>
        <div class="description">
          <p>FRASES</p>
        </div>
      </div>
      <div class="cardd">
        <div class="circle">
          <img src={tecnic} alt="Imagem" />
        </div>
        <div class="description">
          <p>JOGOS</p>
        </div>
      </div>
      <div class="cardd">
        <div class="circle">
          <img src={soms} alt="Imagem" />
        </div>
        <div class="description">
          <p>SOMS</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
