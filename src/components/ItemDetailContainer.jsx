import ItemCount from "./ItemCount"


const ItemDetailContainer = ({nombre, precio, imagen, descripcion, tag}) => {
    return (
        <div className="card__detail">
            <img src={imagen} alt="imagen item"/>
            <div className="card__detail__content">
                <span className="card__detail__name">{nombre}</span>
                <span className="card__detail__price">{precio}</span>
                <span className="card__detail__description">{descripcion}</span>
                <span className="card__detail__tag">{tag}</span>
                <ItemCount onAdd={() => console.log("Agregado")} stock={5}/>
            </div>
        </div>)
}

export default ItemDetailContainer