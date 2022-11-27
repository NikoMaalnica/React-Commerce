import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../api/orders";
import { updateManyProducts } from "../api/products";
import { useCartContext } from "../context/cartContext"

export const Cart = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const {getTotal, cart, emptyCart} = useCartContext();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    useEffect(() => {
        const valid = isValidEmail(email)
        console.log(valid)
    }, [email])


    const createOrder = async () => {

        const items = cart.map(({id, nombre, qty, precio}) => ({
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
        console.log({id})

        await updateManyProducts(items);

        //VACIAR CARRITO
        emptyCart();

        navigate("/")

    };

    return (
        <div className="content">
        {cart.map(product => 
            <div 
                key={product.id}
                style={{
                    display: "flex",
                    gap:50,
                    height:100,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                }}>
                <div style={{fontweight: 600}}>Nombre: {product.nombre}</div>
                <div>Cantidad: {product.qty}</div>
                <div>Categoria: {product.categoria}</div>
            </div>)}
            <span style={{
                marginBottom:50,
                textAlign: "right",
                width: "100%",
                fontSize: 20,
                fontWeight: 600,
            }}>
            ${getTotal()}
            </span>
            <div style={{display: "grid", gap: 10}}>
                <span>Nombre</span>
                <input 
                style={{border: "1px solid black", height: 40}}
                onChange={(e) => setName(e.target.value)}/>
                <span>Telefono</span>
                <input 
                style={{border: "1px solid black", height: 40}}
                onChange={(e) => setPhone(e.target.value)}/>
                <span>Email</span>
                <input 
                style={{border: "1px solid black", marginBottom: 15, height: 40}}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <button disabled={!(name && phone && email)} onClick={createOrder}>Comprar</button>
        </div>
    );
};