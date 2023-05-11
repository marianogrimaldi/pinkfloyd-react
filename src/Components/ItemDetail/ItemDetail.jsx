import "./ItemDetail.scss"
import spotify from "../../assets/img/spotify.png"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const ItemDetail = ({item}) => {
    const[cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        console.log({
            ...item,
            cantidad
    })
    }
    
    return (
        <div className="flexDetail">
                <div></div>
                    <div>
                    <img src={item.img}  className="imgCddetail"/>
                    <ItemCount
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        stock={item.stock}
                        agregar={handleAgregar}
                    />
                    
                </div>
            <div>
                <h3 className="tNombre">{item.nombre}</h3>
                <p className="pDescrip">{item.descripcion}</p>
                <p className="pPrice">Price U$S {item.precio}</p>
                <p className="pPrice">Subtotalice U$s {item.precio * cantidad} </p>
                <a href={item.spotify} target="blank_"><img src={spotify} className="logoSpotify" alt="" /></a>
            </div>  
        </div>
    )
}

export default ItemDetail