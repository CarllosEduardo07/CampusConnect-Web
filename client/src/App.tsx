import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EditarPerfil from "./pages/perfil";
import Forum from "./pages/page-forum/forum";
import Login from "./pages/login";
import Cadastrar from "./pages/cadastrar";

export default function App() {
  return (
    <div className="w-full h-screen font-inter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/perfil" element={<EditarPerfil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
