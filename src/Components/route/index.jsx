import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemList from "../ItemList";
import Produtos from "../pages/produtos";
import Sobre from "../pages/sobre";
import Contato from "../pages/contato";
import DetalheProduto from '../pages/DetalheProduto';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/item/:id" element={<DetalheProduto />} />
      </Routes>
    </>
  );
}

export default AppRouter;
