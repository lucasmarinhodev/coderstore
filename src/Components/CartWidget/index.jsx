import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../Context/CartContext";
import "../nav/style.css";

function CartWidget() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FiShoppingCart size={30} color="#fff" />
      {totalItems > 0 && (
        <span className="cart-item-count">{totalItems}</span>
      )}
    </div>
  );
}

export default CartWidget;
