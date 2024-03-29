import "./ItemListContainer.scss"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

  const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { decadaCd } = useParams()

    function compararPorOrden(a, b) {
        if (a.order < b.order) {
          return -1;
        }
        if (a.order > b.order) {
          return 1;
        }
        return 0;
      }

     useEffect (() => {
        setLoading(true)

        const productosRef = collection(db,"cds")
    
        const q = decadaCd
                    ? query(productosRef, where("decada", "==", decadaCd))
                    : productosRef
        
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map ((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                
                setProductos(docs)
                const ordered = docs.sort(compararPorOrden)
                setProductos(ordered)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

     }, [decadaCd])  

    return (
        <section className="animation">
            <div >
                <p className="selectAlbum">Select your favorite album...</p>
                    <ul className="ulFlexDecade">
                        <Link to="/itemList"><li>ALL</li></Link>
                        <Link to="/itemList/sesenta"> <li>1960</li></Link>
                        <Link to="/itemList/setenta"><li>1970</li></Link>
                        <Link to="/itemList/ochenta"><li>1980</li></Link>
                        <Link to="/itemList/noventa"><li>1990</li></Link>
                        <Link to="/itemList/dosmil"> <li>2000</li></Link>
                        
                    </ul>
            </div>
            <div >
                <ItemList items={productos}/>
            </div>
        </section>
    )
}

export default ItemListContainer