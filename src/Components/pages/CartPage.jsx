import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handlePurchase = () => {
    clearCart();
    setPurchaseCompleted(true);
  };

  return (
    <div className="cart-page">
      <h2>Carrinho de Compras</h2>
      {purchaseCompleted ? (
        <div className="purchase-success">
          <h3>Compra realizada com sucesso!</h3>
          <p>Obrigado por comprar conosco. Volte sempre!</p>
          <Link to="/" className="back-to-store">Voltar à loja</Link>
        </div>
      ) : (
        cart.length === 0 ? (
          <div className="cart-empty">
            <p>Seu carrinho está vazio.</p>
            <Link to="/">Voltar à loja</Link>
          </div>
        ) : (
          <div>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id}>
                  <div className="cart-item-info">
                    <img src={item.pictureUrl ? item.pictureUrl : "path_to_default_image.jpg"} alt={item.title} />
                    <div className="cart-item-details">
                      <span className="cart-item-title">{item.title}</span>
                      <p className="cart-item-description">{item.description}</p>
                      <span>
                        {item.quantity} x R$ {item.price.toFixed(2)} = R$ {(item.quantity * item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <h3>Total: R$ {getTotalPrice()}</h3>
              <button className="clear-cart" onClick={clearCart}>
                Limpar Carrinho
              </button>
              <button className="purchase-button" onClick={handlePurchase}>
                Finalizar minha compra
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CartPage;