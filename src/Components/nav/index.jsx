import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://i.ibb.co/R0rGMg2/logo.png"
            alt="Logo"
            className="logo-img"
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="cart-icon">
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
