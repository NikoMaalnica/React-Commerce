import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../api/orders";
import { updateManyProducts } from "../api/products";
import { useCartContext } from "../context/cartContext";

export const Cart = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const {getTotal, cart, emptyCart} = useCartContext();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function handleEmail({ target }) {
        setEmail(target.value)
    }

    useEffect(() => {
        setIsDisabled(!isValidEmail(email))
    }, [email])


    const createOrder = async () => {

        const items = cart.map(({id, nombre, qty, precio, imagen}) => ({
            id,
            title: nombre,
            qty,
            price: precio,
        }));

        const order = {
            buyer: {name, phone, email},
            items: items,
            total: getTotal(),
        };
        const id = await addOrder(order);
        alert(`Muchas gracias por su compra. El numero de operacion es: ${id}`)

        await updateManyProducts(items);

        emptyCart();

        navigate("/")

    };

    return (
        <div className="content">
        {cart.map(product => 
            <div 
                className="cart__items"
                key={product.id}
                style={{
                    display: "flex",
                    gap:50,
                    height:100,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    color: "whitesmoke"
                }}>
                <img style={{height: "100%", position: "relative"}} src={product.imagen} alt="imagen item"/>
                <div style={{fontweight: 600}}>{product.nombre}</div>
                <div>Cantidad: {product.qty}</div>
            </div>)}
            <span style={{
                display: "flex",
                justifyContent: "end",
                marginBottom:50,
                width: "100%",
                fontSize: 20,
                fontWeight: 400,
                color: "whitesmoke",
            }}>
            Precio Total: ${getTotal()}
            </span>
            <div style={{display: "grid", gap: 10}}>
                <span style={{color: "whitesmoke"}}>Nombre</span>
                <input 
                style={{border: "1px solid black", height: 40}}
                onChange={(e) => setName(e.target.value)}/>
                <span style={{color: "whitesmoke"}}>Telefono</span>
                <input 
                style={{border: "1px solid black", height: 40}}
                onChange={(e) => setPhone(e.target.value)}/>
                <span style={{color: "whitesmoke"}}>Email</span>
                <input 
                style={{border: "1px solid black", marginBottom: 15, height: 40}}
                onChange={handleEmail}/>
            </div>
            <div className="cart__items__buttons">
                <button className="cart__items__buttons__buy" disabled={isDisabled || !(name && phone)} onClick={createOrder}>COMPRAR</button>
                <button className="cart__items__buttons__empty" onClick={emptyCart}>VACIAR CARRITO</button>
            </div>
        </div>
    );
};