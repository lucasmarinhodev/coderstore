import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProdutoContext } from "../ProdutoContext";
import { useCart } from "../Context/CartContext";
import "./DetalheProduto.css";

const DetalheProduto = () => {
  const { id } = useParams();
  const { produtos } = useProdutoContext();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = produtos.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`Produto "${product.title}" adicionado ao carrinho!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/carrinho");
  };

  return (
    <div className="detalhe-produto">
      <img
        src={product.pictureUrl}
        alt={product.title}
        className="detalhe-imagem"
        onError={(e) => e.target.src = '/path/to/default-image.jpg'}
      />
      <div className="detalhe-conteudo">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Preço: R$ {product.price.toFixed(2)}</p>

        <div className="button-groupE">
          <button className="buy-buttonE" onClick={handleBuyNow}>
            Comprar
          </button>
          <button className="add-to-cartE" onClick={handleAddToCart}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalheProduto;

