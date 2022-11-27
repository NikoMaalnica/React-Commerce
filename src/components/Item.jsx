import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../context/cartContext";

const Item = ({id, nombre, precio, imagen, descripcion, tag}) => {
    const navigate = useNavigate();
    const cart = useCartContext();

    const [contextMenu, setContextMenu] = useState({
        top: 0,
        left: 0,
        open: false,
    });
    const handleContextMenu = (evt) => {
        evt.preventDefault()
        console.log(evt)
        setContextMenu({
            top: evt.pageY,
            left: evt.pageX,
            open: true,
        })
    };
    return (
        <div className="card" onClick={() => navigate(`/item/${id}`)} onContextMenu={handleContextMenu} >
            {contextMenu.open ? (
                <div 
                    onMouseLeave={() => setContextMenu({top: 0, left: 0, open: false})}
                    style={{
                        position: "fixed",
                        height:150,
                        width:200,
                        background: "whitesmoke",
                        top: contextMenu.top,
                        left: contextMenu.left,
                        zIndex: 4
                    }}>
                    <span>Añadir al carrito</span>
                </div>) : null}
            <div className="card__top">
                <img src={imagen} alt="imagen item"/>
                <span className="card__name">{nombre}</span>
            </div>
            <div className="card__content">
                <span className="card__price">{precio}</span>
                <span className="card__description">{descripcion}</span>
                <span className="card__tag">{tag}</span>
            </div>
        </div>)
}

export default Item