const Item = ({nombre, precio, imagen, descripcion, tag}) => {

    return (
        <div className="card">
            <div className="card__top">
                <img src={imagen} alt="pc case"/>
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