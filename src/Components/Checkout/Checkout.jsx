import "./Checkout.scss"
import roger2 from "../../assets/roger2.jfif"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContex"
import Error from "../Error/Error"
import { collection, addDoc, getDocs, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import swal from 'sweetalert'

const validaciones = Yup.object().shape({
    nombre: Yup.string()
                .required("Required")
                .min(3, "Too short"),
    pais:   Yup.string()
                .required("Required")
                .min(3, "Too short"),
    pc:     Yup.string()
                .required("Required"),
    ciudad: Yup.string()
                .required("Required")
                .min(3, "Too short"),
    domicilio:   Yup.string()
                .required("Required")
                .min(3, "Too short"),          
    email: Yup.string()
                .email("Invalid")
                .required("Required")
})

const Checkout = () => {

        const { cart, totalCompra, emptyCart } = useContext(CartContext)
        const [orderId, setOrderId] = useState (null)
        const generarOrden = async (values) => {
        
        const orden = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra()
        }
        const batch = writeBatch(db)
        const productosRef = collection(db, "cds")
        const orderRef = collection (db, "orders")
        const q = query(productosRef, where( documentId(), "in", cart.map(item =>item.id)))
        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id )
            const stock = doc.data().stock
           
        if (stock >= item.cantidad) {
            batch.update(doc.ref, {
                stock: stock - item.cantidad
            })
        }else{
            outOfStock.push(item)
            }
         })

    if (outOfStock.length === 0) {
        addDoc(orderRef, orden)
            .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
    } else {
            swal({
            title: "SORRY",
            text: "WITHOUT STOCK",
            icon: "error",
            buttons: false,
            timer: 3000,
            className:"swal",
          });
    }
}

    if(orderId){
             return(
                <section className="animation">
                    <div className="flexPurch">
                        <h2 > Your purchase was registered successfully</h2>
                        <p>This is your order number:</p>
                        <p className="order">{orderId} </p>
                        <p>Don't lose it, ok?</p>
                        <Link to="/itemList"><p>Click here to buy another album...</p></Link>
                    </div>
                </section>
             )
         }
     
    if (cart.length === 0){
            return  <Error/>
    }

    return (
        <div className="animation"> 
            <div className="flexRoger">
                <img src={roger2} className="roger" alt="Roger Waters Pic" />  
            </div>
            <div className="flexCheck">
                <h1 >You, yes you...</h1>
                <h3>Complete the data and end the experience</h3>
            </div>
            <Formik
                initialValues={{
                    nombre:"",
                    pais:"",
                    pc:"",
                    ciudad:"",
                    domicilio:"",
                    cel:"",
                    email:""
                }}  
                validationSchema={validaciones}
                onSubmit={generarOrden}
    
                >

                {() => (
                    <Form className="form">
                        <Field  type="text" placeholder="Name"  name="nombre" />
                        <ErrorMessage name="nombre" component={"p"}/>
                        <Field  type="text" placeholder="Cpuntry"  name="pais" />
                        <ErrorMessage name="pais" component={"p"}/>
                        <Field  type="number" placeholder="Postal Code"  name="pc" />
                        <ErrorMessage name="pc" component={"p"}/>
                        <Field  type="text" placeholder="City"  name="ciudad" />
                        <ErrorMessage name="ciudad" component={"p"}/>
                        <Field  type="text" placeholder="Addres"  name="domicilio" />
                        <ErrorMessage name="domicilio" component={"p"}/>
                        <Field  type="number" placeholder="CelPhone"  name="cel" />
                        <Field  type="email" placeholder="Email"  name="email" />
                        <ErrorMessage name="email" component={"p"}/>
                        <button type="submit" >SEND</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout