import "./Home.css";
import tecnic from "../images/tecnic.png";
import frases from "../images/frases.jpeg";
import { Link } from "react-router-dom";
import lista from "../images/lista.png";
import jogos from "../images/jogos.jpg";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Link className="cardd animate-card-left" to="/techniques">
        <div className="circle">
          <img src={tecnic} alt="Imagem" />
        </div>
        <div className="description">
          <p>TÉCNICAS</p>
        </div>
      </Link>

      <Link className="cardd animate-card-right" to="/frases">
        <div className="circle">
          <img src={frases} alt="Imagem" />
        </div>
        <div className="description">
          <p>FRASES</p>
        </div>
      </Link>
      <Link className="cardd animate-card-left" to="/to-do-list">
        <div className="circle">
          <img src={lista} alt="jogos" />
        </div>
        <div className="description">
          <p>TAREFAS</p>
        </div>
      </Link>
      <Link className="cardd cardd animate-card-right" to="/games">
        <div className="circle">
          <img src={jogos} alt="soms" />
        </div>
        <div className="description">
          <p>JOGOS</p>
        </div>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
