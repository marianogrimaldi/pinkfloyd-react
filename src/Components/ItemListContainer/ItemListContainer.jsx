import "./ItemListContainer.scss"


const ItemListContainer = ({text}) => {
    return (
        <section>
            <div className="flexTitle">
                <h1 className="title">{text} </h1> 
            </div>
        </section>
    )
}

export default ItemListContainer