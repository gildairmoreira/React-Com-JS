import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";
import { useState } from "react";

export default function Router() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login
              nome={nome}
              setNome={setNome}
              saldo={saldo}
              setSaldo={setSaldo}
            />
          }
        />
        <Route exact path="/feira" element={<Feira />} />
        <Route exact path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}
