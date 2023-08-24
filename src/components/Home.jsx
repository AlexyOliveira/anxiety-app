import "./Home.css";
import tecnic from "../images/tecnic.png";
import frases from "../images/frases.jpeg";
import { Link } from "react-router-dom";
import jogos from "../images/jogos.jpg";
import soms from "../images/soms.avif";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="home-container">
      <Header />
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
          <img src={jogos} alt="jogos" />
        </div>
        <div class="description">
          <p>JOGOS</p>
        </div>
      </Link>
      <Link class="cardd cardd animate-card-right" to="/audios">
        <div class="circle">
          <img src={soms} alt="soms" />
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
