import React, { useEffect, useState } from "react";
import "./Home.css";
import tecnic from "../images/tecnic.png";
import frases from "../images/frases.jpeg";
import soms from "../images/soms.avif";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("anxietappname");
    setName(userName);
  }, []);
  return (
    <div className="home-container">
      <h1> Olá {name}!</h1>
      <Link class="cardd animate-card-left" to="/techniques">
        <div class="circle">
          <img src={tecnic} alt="Imagem" />
        </div>
        <div class="description">
          <p>TÉCNICAS</p>
        </div>
      </Link>
      
      <Link class="cardd animate-card-right" to="/frases">
        <div class="circle">
          <img src={frases} alt="Imagem" />
        </div>
        <div class="description">
          <p>FRASES</p>
        </div>
      </Link>
      <Link class="cardd animate-card-left" to="/games">
        <div class="circle">
          <img src={tecnic} alt="Imagem" />
        </div>
        <div class="description">
          <p>JOGOS</p>
        </div>
      </Link>
      <Link class="cardd cardd animate-card-right" to="/audios">
        <div class="circle">
          <img src={soms} alt="Imagem" />
        </div>
        <div class="description">
          <p>SOMS</p>
        </div>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
