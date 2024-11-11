import { FiShoppingCart } from "react-icons/fi";
import '../NavBar/style.css';

function CartWidget() {
    return (
        <div className="cart-widget">
            <FiShoppingCart size={30} color="#fff" />
        </div>
    )
}

export default CartWidget;