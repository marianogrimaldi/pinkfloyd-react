import { Link } from "react-router-dom"
import "./ItemCard.scss"


const ItemCard = ({item}) => {
        return (

            <div>
                <Link to={`/detail/${item.id}`} ><img src={item.img}/></Link>
                    <div className="detail">
                        <h3 className="nombreCd">{item.nombre}</h3>
                        <h4 className="añoCd">{item.año}</h4>
                        
                    </div>   
            </div>     
        )
}

export default ItemCard