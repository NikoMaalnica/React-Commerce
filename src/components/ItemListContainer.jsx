import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item"
import { getProducts } from "../api/products";
import SpinnerLoading from "./Spinner";

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
        
        {loading ? <SpinnerLoading /> : null}
        {productos.map((producto) => {
            return (
                <Item
                    key={producto.id}
                    {...producto}
                />
            );
        })}
    </div>
};

export default ItemListContainer;