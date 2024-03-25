import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";
import Sobre from "pages/Sobre";
import Servicos from "pages/Serviços";
import Blog from "pages/Blog";
import Contato from "pages/Contato";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
