import "./ItemListContainer.scss"
import { useEffect, useState } from "react"
import pedirDatos from "../../Helpers/pedirDatos"
import CdsList from "../Cds/cds"
import CartWidget from '../CartWidget/cartWidget'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


  const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { decadaCd } = useParams()



    
     useEffect (() => {
        setLoading(true)

        pedirDatos()
        .then((data) => {
            if (!decadaCd) {
                setProductos(data)
            } else {
                setProductos( data.filter((el) => el.decada === decadaCd) )
            }
        })
            .catch((error) => {
                console.log(error)
            })
     }, [decadaCd])  

    return (
        <section className="animation">
            <div >
           
            <p className="selectAlbum">Selet your favorite album...</p>
            <ul className="ulFlexDecade">
            <Link to="itemList/decadaCd"><li>ALL</li></Link>
               <Link to="/itemList/sesenta"> <li>1960</li></Link>
               <Link to="/itemList/setenta"><li>1970</li></Link>
               <Link to="/itemList/ochenta"><li>1980</li></Link>
               <Link to="/itemList/noventa"><li>1990</li></Link>
               <Link to="/itemList/dosmil"> <li>2000</li></Link>
                <CartWidget/>
            </ul>
            </div>
            
            <div>
                <CdsList items={productos}/>
            </div>
        
        </section>
    )
}

export default ItemListContainer