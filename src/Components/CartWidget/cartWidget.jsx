import carrito from "../../assets/img/carrito.jpg"
import "./cartWidget.scss"


const CartWidget = () => {
    return(

        <div className="flexCart"> 
            <img src={carrito} className="carrito" alt="" />
            <span>0</span>
        </div>
    )
}

export default CartWidget