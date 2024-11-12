import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, pictureUrl }) => (
    <div className="item">
        <img src={pictureUrl} alt={title} />
        <h3>{title}</h3>
        <p>Preço: R${price}</p>
        <Link to={`/item/${id}`}>
            <button className="buy-button">Comprar</button>
            <button className="add-to-cart">Adicionar ao carrinho</button>
        </Link>
    </div>
);

export default Item;
