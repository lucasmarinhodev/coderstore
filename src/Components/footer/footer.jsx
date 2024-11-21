import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient"></div>
      <div className="footer-container footer-container-md">
        <div>
          <img src="https://i.ibb.co/JK0z8ZJ/footerlogo.png" alt="Logo" />
        </div>

        <nav className="footer-nav">
          <Link to="/">
            <a className="texto">Home</a>
          </Link>

          <Link to="/sobre">
            <a className="texto">Sobre</a>
          </Link>

          <Link to="/produtos">
            <a className="texto">Produtos</a>
          </Link>

          <Link to="/contato">
            <a className="texto">Contato</a>
          </Link>
        </nav>
      </div>

      <div className="footer-text footer-text-md">
        <p>
          Site desenvolvido para o projeto do curso da Coderhouse por Gustavo
          Mamede, Lucas Marinho, Lucas Coelho e Weder França.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
