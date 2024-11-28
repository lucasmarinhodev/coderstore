import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProdutoProvider } from './components/ProdutoContext';
import { CartProvider } from './components/Context/CartContext';

ReactDOM.render(
  <ProdutoProvider>
    <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>
  </ProdutoProvider>,
  document.getElementById('root')
);
