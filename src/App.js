import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Techniques from "./components/Techniques";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/techniques" element={<Techniques />} />
      </Routes>
    </div>
  );
}

export default App;
