import React from "react";
import frases_list from "../services/frasesJson";
import Header from "./Header";
import "./Frases.css";
import Footer from "./Footer";

function Frases() {
  return (
    <div className="frases-container">
      <Header />
      {frases_list.map((f) => (
        <div className="frases-card card" key={f.id}>
          <img src={f.link} alt="frase" />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Frases;
