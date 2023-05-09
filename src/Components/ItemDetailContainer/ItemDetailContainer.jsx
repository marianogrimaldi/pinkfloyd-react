import { useEffect, useState } from "react"
import pedirDatos from "../../Helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () => {
    const [item, setItem] = useState ([])
    const [loading, setLoading] = useState (true)

    const {idCd} = useParams()
    console.log (idCd)
    console.log (item)

    useEffect(() => {
        setLoading (true)

      pedirDatos()
            .then((data) => setItem(data.find((el)=> el.id === Number(idCd))))
            .catch (error => console.log(error))
            .finally(() => setLoading(false))
    },[])



    return (

        <div className="animation">
            
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer