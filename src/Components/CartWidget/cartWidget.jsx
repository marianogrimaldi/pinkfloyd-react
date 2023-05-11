
import {SiDiscogs}  from "react-icons/Si"
import "./cartWidget.scss"


const CartWidget = () => {
    return(

        <div className="flexCart"> 
            <SiDiscogs className="carrito"/>
            <span className="cantidad">0</span>
        </div>
    )
}

export default CartWidget

