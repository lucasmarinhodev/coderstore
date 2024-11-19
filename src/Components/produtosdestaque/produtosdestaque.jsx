import React from "react";
import Item from "../Item";
import "./produtosdestaque.css";

const mockProducts = [
  {
    id: 1,
    title: "TECLADO GAMER RGB - LU734-NOC-SA",
    price: 199.99,
    pictureUrl:
      "https://lvlupgamingla.com/cdn/shop/products/809A4785_2_1200x1700.png?v=1642207350",
  },
  {
    id: 2,
    title: "HEADSET GAMING LIGHT UP PRO COM MICROFONE",
    price: 299.99,
    pictureUrl:
      "https://lvlupgamingla.com/cdn/shop/products/809A4695_1200x1700.png?v=1640102625",
  },
  {
    id: 3,
    title: "MESA GAMER KOBRA - LU980-NOC-SA",
    price: 399.99,
    pictureUrl:
      "https://lvlupgamingla.com/cdn/shop/products/809A4909_1200x1700.png?v=1641503484",
  },
  {
    id: 4,
    title: "KIT GAMER 3 EN 1 - LU745-NOC-ESP",
    price: 159.99,
    pictureUrl:
      "https://lvlupgamingla.com/cdn/shop/products/kit-negro_1200x1700.png?v=1641432866",
  },
];

const ProdutosDestaque = () => {
  return (
    <div id="produtos" className="produtos-grid">
      {mockProducts.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          pictureUrl={product.pictureUrl}
          className="item-id"
        />
      ))}
    </div>
  );
};

export default ProdutosDestaque;
