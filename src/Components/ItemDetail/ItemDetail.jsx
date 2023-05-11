import "./ItemDetail.scss"
import spotify from "../../assets/img/spotify.png"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({item}) => {

    
    return (
        <div className="flexDetail">
                <div></div>
                    <div>
                    <img src={item.img}  className="imgCddetail"/>
                    <ItemCount
                        stock={item.stock}
                        item={item}
                    />
                </div>
            <div>
                <h3 className="tNombre">{item.nombre}</h3>
                <p className="pDescrip">{item.descripcion}</p>
                <p className="pPrice">Price U$S {item.precio}</p>
                <a href={item.spotify} target="blank_"><img src={spotify} className="logoSpotify" alt="" /></a>
            </div>  
        </div>
    )
}

export default ItemDetail