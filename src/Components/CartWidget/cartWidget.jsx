import { Link } from 'react-router-dom'
import {SiDiscogs}  from "react-icons/Si"
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'
import "./cartWidget.scss"


const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)

    return(

        <Link to="/cart" className="flexCd"> 
            <SiDiscogs className="carrito"/>
            <span className="cantidad">{totalCantidad()}</span>
         </Link>
    )
}

export default CartWidget

