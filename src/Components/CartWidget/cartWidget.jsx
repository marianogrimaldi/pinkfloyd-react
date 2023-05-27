import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'
import "./cartWidget.scss"
import cd from "../../assets/cd.png"

const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)
    return(
        <Link to="/cart" className="flexCd"> 
            <img src={cd} className="carrito" alt="" />
           
            <span className="cantidad">{totalCantidad()}</span>
         </Link>
    )
}

export default CartWidget

