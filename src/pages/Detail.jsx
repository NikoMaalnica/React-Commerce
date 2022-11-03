import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../api/products";
import ItemDetailContainer from "../components/ItemDetailContainer";
import UserLayout from "../components/UserLayout"
import Spinner from "../components/Spinner";



export const Detail = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setItem([]);
        setLoading(true);
        getProduct(itemId)
            .then((data) => {setItem(data); setLoading(false)})
    },[itemId]);

    return <>
        <UserLayout>
            {loading ? <Spinner /> : null}
            <ItemDetailContainer
            nombre={item.nombre}
            categoria={item.categoria}
            descripcion={item.descripcion}
            precio={item.precio}
            imagen={item.imagen}
            />
        </UserLayout>
        </>
}

/* export const Detail = () => {
    const {itemId} = useParams();
    const [item, setItem] = useState({})
    
    useEffect(() => {
        getProduct(itemId).then((data) => setItem(data))
    },[itemId]) */

/* return <UserLayout>
            <div>{item.nombre}</div>
            <div>{item.categoria}</div>
        </UserLayout> */
/* } */