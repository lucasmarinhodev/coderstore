import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CartWidget from "../CartWidget";
import logo from "../assets/logo.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/produtos" onClick={() => setIsMobileMenuOpen(false)}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={() => setIsMobileMenuOpen(false)}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={() => setIsMobileMenuOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/carrinho">
          <CartWidget />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default NavBar;
