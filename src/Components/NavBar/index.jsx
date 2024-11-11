import React from 'react';
import "./style.css"
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">
      <img src="https://s3-alpha-sig.figma.com/img/370b/9542/f36581bc27f3cfa1ecad2d6bec49b069?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ctkG2M9N5DniBM5MQQCITYZjWn55C-haMkt0kLPtqu0XBNi1e8hNQmv7ypMkxROmsR5E9kuSDDy~UITVByZlJVKcNMCnZxYb8MbcuKxc4FoQWspRXrCEzn~G4TlqpOwMGq7~XcLOkE9KYvE7nTxuC46U12mD3kku6423dS-m8-s6CWv43iIclCFGQzcAzDr7cAmjSNorh~cmYGyOqs7JdyxmhB3mY9a0eJFug9qCdkM3Ud8JPin0rWPldz8FCQv59qpw5Cg0KoVD1Xm4xOF~LfTQD0jY8FRQDroYBxnuPZunDJKThqfghlLEu1tpTnNl7WJSdZ4ffTlNNzZzdBprvw__" 
      alt="Logo"
      className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#sobre">Sobre nós</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <CartWidget /> {}
      </div>
    </header>
  );
}

export default NavBar;
