import "./ItemDetail.scss"
import spotify from "../../assets/img/spotify.png"
import ItemCount from "../ItemCount/ItemCount"
import {useContext, useState } from "react"
import { CartContext } from "../../Context/CartContex"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const[cantidad, setCantidad] = useState(1)
    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
    }
    agregarAlCarrito(newItem)
    }

    return (
        <div className="flexDetail">
                <div></div>
                    <div>
                        <img src={item.img}  className="imgCddetail"/>
                        {
                        isInCart(item.id)
                        ? <div className="checkout">
                        <Link to="/cart" ><button className="animation">Checkout</button> </Link></div>
                        : <ItemCount
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            stock={item.stock}
                            agregar={handleAgregar}
                        />
                        }
                    </div>
                <div>
                    <h3 className="tNombre">{item.nombre}</h3>
                    <p className="pDescrip">{item.descripcion}</p>
                    <p className="pPrice">Stock {item.stock} </p>
                    <p className="pPrice">Price u$s {item.precio}</p>
                    <p className="pPrice">Subtotalice U$s {item.precio * cantidad} </p>
                    <a href={item.spotify} target="blank_"><img src={spotify} className="logoSpotify" alt="Logo Sopity" /></a>
                </div>  
        </div>
    )
}

export default ItemDetail