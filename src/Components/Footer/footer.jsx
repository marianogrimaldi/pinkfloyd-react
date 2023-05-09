import "./footer.scss"
import logoMarian from "../../assets/img/logoMarian.png"
import logo from "../../assets/img/pink.png"
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="footerFlex">
            <div>
                <ul className="ulFooter">
                    <Link to="./." ><li>home</li></Link>
                    <Link to="./info"><li>info</li></Link>
                    <Link to="./itemList">  <li>discography</li></Link>
                    <a href="https://www.pinkfloyd.com/" target="blank_"><li>official site</li></a>
                    <Link to="./gallery"> <li>gallery</li></Link>
                    <Link to="./contact"> <li>contact</li></Link>
                </ul>
            </div>
            <div className="footer">
                <img src={logoMarian} alt="" />
                <p>to.the.top</p>
                <p>WEB DEVELOPMENT by MARIANO GRIMALDI</p>
            </div>
            <div>
                <img src={logo} className="logoFooter" alt="" />
            </div>   
        </footer>
    )
}

export default Footer