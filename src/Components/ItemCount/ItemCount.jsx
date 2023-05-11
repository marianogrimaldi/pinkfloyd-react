
import "./ItemCount.scss"


const ItemCount = ({cantidad, setCantidad, stock, agregar}) => {
    

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

   

    return (
        <div className="flexHandle">
            <button onClick={handleRestar} >-</button>
            <span >{cantidad} </span>
            <button onClick={handleSumar} >+</button>
            <button onClick={agregar} >add to cart</button>
            <br/>
            
        </div>
    )
}

export default ItemCount