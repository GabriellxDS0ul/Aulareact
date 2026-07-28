import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";
export default function App()
{
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/estados/mg"
    </Routes>
    </BrowserRouter>
  );
}

