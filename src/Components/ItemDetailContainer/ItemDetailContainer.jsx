import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc, query } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {
    const [item, setItem] = useState ([])
    const [loading, setLoading] = useState (true)

    const {idCd} = useParams()
    

    useEffect(() => {
        setLoading (true)

        
        const docRef = doc(db, "cds", idCd)
        

        getDoc(docRef)
            .then((doc)=>{
                const _item = {
                    ...doc.data(),
                    id: doc.id
                }
                setItem(_item)

            })

            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    },[])



    return (

        <div className="animation">
            
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer