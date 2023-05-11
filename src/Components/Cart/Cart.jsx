
import { useContext } from "react"
import { CartContext } from "../../Context/CartContex"
import { FaTrashAlt } from 'react-icons/fa'
import "./Cart.scss"

const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    return (
        <div className="animation">
            <h2 className="titleCart">Check the selected albums and finalize your purchase</h2>
          

            {
                cart.map((item) => (
                    <div className="flexCart" key={item.id}>
                        
                        <h3>{item.nombre}</h3>
                        <img src={item.img}/>
                        <p className="pCart">Amount: {item.cantidad}</p>
                        <p className="pCart">Subtotalice: u$s {item.cantidad * item.precio}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FaTrashAlt/></button>
                        
                    </div>
                ))
            }

            <div className="totalFlex">
                <h3 className="total">TOTAL: u$s {totalCompra()}</h3>
               
                <button onClick={emptyCart} className="btn btn-danger">Empty cart</button>
            </div>
        </div>
    )
}

export default Cart