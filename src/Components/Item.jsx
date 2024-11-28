import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/Context/CartContext";
import "./Item.css";

const Item = ({ id, title, price, pictureUrl }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, pictureUrl });
  };

  return (
    <div className="item">
      <img src={pictureUrl} alt={title} />
      <h3>{title}</h3>
      <p>Preço: R${price}</p>
      <div className="button-group">
        <Link to={`/item/${id}`}>
          <button className="buy-button">Mais Informações</button>
        </Link>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Item;
