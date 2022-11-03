import { useNavigate } from "react-router-dom"

const Item = ({id, nombre, precio, imagen, descripcion, tag}) => {
    const navigate = useNavigate();
    return (
        <div className="card" onClick={() => navigate(`/item/${id}`)}>
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