import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/route/index';
import { ProdutoProvider } from './components/ProdutoContext';

const images = [
  'https://via.placeholder.com/800x300?text=Image+1',
];

function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;