import "./ItemList.scss"
import ItemCard from "../ItemCard/ItemCard"
import flores from "../../assets/img/flores.png"

const ItemList = ( {items} ) => {
    return(
            <div className="sectionGrid">
                {
                items.map((cd) => <ItemCard item={cd} key={cd.id}/>)
                }
                
            </div>

       
    )
}

export default ItemList