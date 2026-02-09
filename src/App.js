import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Techniques from "./components/Techniques";
import MobileWarning from "./components/MobileWarning";
import { useEffect } from "react";
import Frases from "./components/Frases";
import ToDoList from "./components/ToDoList";
import Games from "./components/Games";
import About from "./components/About";


function App() {
  const navigate = useNavigate();
  const windowWidth = window.innerWidth;
  useEffect(() => {
    if (windowWidth > 800) {
      // Redirecionar para a página de aviso para acessar pelo smartphone
      navigate("mobile-warning");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mobile-warning" element={<MobileWarning />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/frases" element={<Frases />} />
        <Route path="/games" element={<Games />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
