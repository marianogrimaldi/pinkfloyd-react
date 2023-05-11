import { useState } from "react"
import "./ItemCount.scss"


const ItemCount = ({stock, item }) => {
    const[cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    const handleAdd = () => {
        console.log({
            ...item,
            cantidad
        })
    }

    return (
        <div className="flexHandle">
            <button onClick={handleRestar} >-</button>
            <span >{cantidad} </span>
            <button onClick={handleSumar} >+</button>
            <button onClick={handleAdd}>add to cart</button>
            <br/>
            
        </div>
    )
}

export default ItemCount