import { useState } from "react"
import ButtonCounter from "./Button"
import { TbPlus, TbMinus } from "react-icons/tb"

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(0)

    const handleAdd = () => {
        if (contador - stock) setContador (contador + 1)
    }
    const handleSubstract = () => {
        if(contador > 0) setContador (contador - 1)
    }

    return (
        <div className='grid'>
            <ButtonCounter onClick={handleSubstract} leftIcon={<TbMinus />}></ButtonCounter>
            <span>{contador}</span>
            <ButtonCounter onClick={handleAdd} rightIcon={<TbPlus />}></ButtonCounter>
            <ButtonCounter  onClick={() => {
                if (contador) onAdd(contador)
                }} disabled={!contador}> Agregar al carrito </ButtonCounter>
        </div>
    )
}

export default ItemCount;