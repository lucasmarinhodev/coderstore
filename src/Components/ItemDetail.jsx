import React from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const mockProducts = [
    {
      id: 1,
      title: "Produto 1",
      price: 199.99,
      pictureUrl: "https://via.placeholder.com/300x300?text=Produto+1",
    },
    {
      id: 2,
      title: "Produto 2",
      price: 299.99,
      pictureUrl: "https://via.placeholder.com/300x300?text=Produto+2",
    },
    {
      id: 3,
      title: "Produto 3",
      price: 399.99,
      pictureUrl: "https://via.placeholder.com/300x300?text=Produto+3",
    },
    // ...outros produtos
  ];

  const product = mockProducts.find((item) => item.id === parseInt(id)); // Busca o produto pelo id da URL

  if (!product) {
    return <h2>Produto não encontrado</h2>;
  }

  return (
    <div className="item-detail-container">
      <img
        src={product.pictureUrl}
        alt={product.title}
        className="item-detail-image"
      />
      <h1 className="item-detail-title">{product.title}</h1>
      <p className="item-detail-price">Preço: R${product.price.toFixed(2)}</p>
      <p className="item-detail-description">
        Este é um breve texto detalhando as características do {product.title}.
      </p>
      <div className="item-detail-actions">
        <button className="item-detail-add-to-cart">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
