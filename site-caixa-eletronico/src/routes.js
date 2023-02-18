import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";
import { UsuarioProvider } from "./common/context/usuario";
import { CarrinhoProvider } from "common/context/carrinho";

export default function Router() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <CarrinhoProvider >
           <Route exact path="/feira" element={<Feira />} /> 
</CarrinhoProvider>
          <Route exact path="/carrinho" element={<Carrinho />} />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  );
}
