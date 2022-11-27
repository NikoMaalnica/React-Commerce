import { TbShoppingCart } from "react-icons/tb";
import { useCartContext } from "../context/cartContext";

const CartWidget = () => {
    const { cart, getCartQty} = useCartContext();
    return <div className='header__buttons'>
        <TbShoppingCart className="header__buttons__icon"/>
        <span className="navbar__cart-qty">{getCartQty()}</span>
    </div>
}

export default CartWidget;