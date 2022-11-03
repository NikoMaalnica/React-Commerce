import { useState } from "react"
import Button from "./Button"
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
            <Button onClick={() => handleSubstract()} leftIcon={<TbMinus />}></Button>
            <span>{contador}</span>
            <Button onClick={() => handleAdd()} rightIcon={<TbPlus />}></Button>
            <Button onClick={() => {
                if (contador) onAdd()
                }}> Agregar al carrito </Button>
        </div>
    )
}

export default ItemCount;