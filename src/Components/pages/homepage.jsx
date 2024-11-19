import React from "react";
import ProdutosDestaque from "../produtosdestaque/produtosdestaque";
import "./homepage.css";
import Banner from "../banner/banner";

function HomePage() {
  return (
    <div className="App">
      <Banner />
      <h1 className="title-products">Produtos em Destaque</h1>
      <ProdutosDestaque />
      <br />
      <br />
      <br />
    </div>
  );
}

export default HomePage;
