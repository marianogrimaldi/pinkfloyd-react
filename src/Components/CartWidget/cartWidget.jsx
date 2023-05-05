import carrito from "../../assets/img/carrito.png"
import "./cartWidget.scss"


const CartWidget = () => {
    return(

        <div>
            <img src={carrito} className="carrito" alt="" />
            <span>0</span>
        </div>
    )
}

export default CartWidget