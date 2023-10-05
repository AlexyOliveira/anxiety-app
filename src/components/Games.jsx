import React from "react";
import cacaPalavras from "../images/caca-palavras.png";
import colors from "../images/colors.png";
import buble from "../images/buble.jpg";
import blocKey from "../images/block-key.jpg";

import "./Games.css";
import Header from "./Header";
import Footer from "./Footer";

function Games() {
  return (
    <div className="games-container">
      <Header />
      <div class="game card" style={{ width: "18rem" }}>
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

      <div class="game card" style={{ width: "18rem" }}>
        <img src={buble} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Bubble Shooter</h5>
          <p class="card-text">
            Combine cores, ajuste a trajetória e a potência do seu disparo para
            criar combos incríveis.
          </p>
          <a
            href="https://poki.com/br/g/bubble-shooter-rf#fullscreen"
            className="btn btn-primary"
          >
            Jogar
          </a>
        </div>
      </div>

      <div class="game card" style={{ width: "18rem" }}>
        <img src={colors} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Cor Esmagar</h5>
          <p class="card-text">
            Divirta-se com o Cor Esmagar, um jogo original de combinar cores da
            Razzle Puzzles!
          </p>
          <a
            href="https://api.razzlepuzzles.com/colorcrush?locale=pt"
            className="btn btn-primary"
          >
            Jogar
          </a>
        </div>
      </div>

      <div class="game card" style={{ width: "18rem" }}>
        <img src={blocKey} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Free the key</h5>
          <p class="card-text">
            Sua missão é remover uma chave valiosa, mas ela está bloqueada por
            uma série de blocos intrusos.
          </p>
          <a
            href="https://poki.com/br/g/free-the-key#fullscreen"
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
