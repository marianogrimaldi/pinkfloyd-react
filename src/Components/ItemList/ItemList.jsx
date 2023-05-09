import "./ItemList.scss"
import ItemCard from "../ItemCard/ItemCard"

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