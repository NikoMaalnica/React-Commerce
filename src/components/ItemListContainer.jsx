import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item"
import { getProducts } from "../api/products";
import Spinner from "./Spinner";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProductos([]);
        setLoading(true);
        getProducts(categoryId)
            .then(items => {setProductos(items); setLoading(false)})
    },[categoryId]);




    return <div className='products'>
        
        {loading ? <Spinner /> : null}
        {productos.map((producto) => {
            return (
                <Item
                    key={producto.id}
                    id={producto.id}
                    nombre={producto.nombre} 
                    precio={producto.precio} 
                    descripcion={producto.descripcion} 
                    tag={producto.tag} 
                    imagen={producto.imagen} 
                />
            );
        })}
    </div>
};

export default ItemListContainer;