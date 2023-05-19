import logo from "../../assets/img/pink.png"
import "./header.scss"
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget/cartWidget"



const Header = () => {
    return (
        <div className="animation">
            <header className="headerFlex" >
                < div>
                <img src= { logo } className="logo" alt="Logo Pink Floyd" />
                </div>
                <nav className="navSupStyles">
                    <ul className="ulFlex">
                        <Link to="./."><li>home</li></Link>
                        <Link to="./info"><li>info</li></Link>
                        <Link to="/itemList">  <li>discography</li></Link>
                        <a href="https://www.pinkfloyd.com/" target="blank_"><li>official site</li></a>
                        <Link to="./gallery"> <li>gallery</li></Link>
                        <a href="footer"><li>contact</li></a>
                        <CartWidget className="carritoNav"/>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header