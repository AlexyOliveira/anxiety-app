import React from "react";
import cacaPalavras from "../images/caca-palavras.png";
import "./Games.css";
import Header from "./Header";
import Footer from "./Footer";

function Games() {
  return (
    <div className="games-container">
      <Header />
      <div class="card" style={{ width: "18rem" }}>
        <img src={cacaPalavras} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Caça palavras</h5>
          <p class="card-text">
            Divirta-se com o Caça-palavras, o jogo clássico com milhares de
            quebra-cabeças gratuitos!
          </p>
          <a
            href="https://api.razzlepuzzles.com/wordsearch?locale=pt"
            className="btn btn-primary"
          >
            Jogar
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Games;
