import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../api/products";
import { useCartContext } from "../context/cartContext";
import ItemCount from "./ItemCount";
import SpinnerLoading from "./Spinner";


export const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const {addProduct, removeProduct} = useCartContext();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setItem([]);
        setLoading(true);
        getProduct(itemId)
            .then((data) => {setItem(data); setLoading(false)})
    },[itemId]);

    const handleAdd = (qty) => {
        console.log("producto agregado", {...item, qty});
        addProduct(item, qty)
    };

    return <>
            {loading ? <SpinnerLoading /> : null}
            <div className="card__detail">
                <img src={item.imagen} alt="imagen item"/>
                <div className="card__detail__content">
                    <span className="card__detail__name">{item.nombre}</span>
                    <span className="card__detail__price">{item.precio}</span>
                    <span className="card__detail__description">{item.descripcion}</span>
                    <span className="card__detail__tag">{item.tag}</span>
                    <ItemCount stock={item.stock} onAdd={handleAdd} />
                    <button onClick={() => removeProduct(item.id)}>Eliminar</button>
                </div>
            </div>
        </>
}