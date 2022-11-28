import { TbShoppingCart } from "react-icons/tb";
import { useCartContext } from "../context/cartContext";

const CartWidget = () => {
    const { getCartQty} = useCartContext();
    return <div className='header__buttons'>
        <TbShoppingCart className="header__buttons__icon"/>
        <span className="header__buttons__icon__qty">{getCartQty()}</span>
    </div>
}

export default CartWidget;