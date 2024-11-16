
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemList from '../ItemList';
import Produtos from '../pages/produtos';

function AppRouter() {
  return (
    <>

      <Routes>
        <Route path="/" element={<ItemList />} /> { }
        <Route path="/produtos" element={<Produtos />} /> { }
      </Routes>
    </>
  );
}

export default AppRouter;