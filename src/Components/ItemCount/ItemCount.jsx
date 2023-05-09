import { useState } from "react"
import "./ItemCount.scss"


const ItemCount = () => {
    const[cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    return (
        <div className="flexHandle">
            <button onClick={handleRestar} >-</button>
            <span >{cantidad} </span>
            <button onClick={handleSumar} >+</button>
            <button>add to cart</button>
            <br/>
            
        </div>
    )
}

export default ItemCount