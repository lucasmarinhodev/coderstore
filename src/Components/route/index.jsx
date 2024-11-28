import React from "react";
import { Routes, Route } from "react-router-dom";
import Produtos from "../produtos/produtos";
import Sobre from "../pages/sobre";
import Contato from "../pages/contato";
import HomePage from "../pages/homepage";
import DetalheProduto from "../pages/DetalheProduto";
import CartPage from '../pages/CartPage';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/item/:id" element={<DetalheProduto />} />
        <Route path="/carrinho" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default AppRouter;
