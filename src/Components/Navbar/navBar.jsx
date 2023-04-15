import logo from "../../assets/img/pink.png"
import "./navBar.scss"
import carrito from "../../assets/img/carrito.png"



const NavBar = () => {
    return (
        <header className="headerFlex">
            < div>
               <img src= { logo } className="logo" alt="Logo Pink Floyd" />
            </div>
            <nav> 
                <div className="butFlex">
                    <button>All</button>
                    <button>60s</button>
                    <button>70s</button>
                    <button>80s</button>
                    <button>90s</button>
                    <button>00s</button>
                    <button className="btnCarrito" ><img className="carrito" src={carrito} alt="" /></button>
                </div>
            </nav>
        </header>
  
    )
}

export default NavBar