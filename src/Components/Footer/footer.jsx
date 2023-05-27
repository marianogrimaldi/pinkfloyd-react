import "./footer.scss"
import logoMarian from "../../assets/img/logoMarian.png"
import logo from "../../assets/img/pink.png"
import logoW from "../../assets/img/wppLogo.png"
import logoI from "../../assets/img/instLogo.png"
import logoF from "../../assets/img/faceLogo.webp"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footerFlex">
            <div id="footer">
                <ul className="ulFooter">
                    <Link to="./." ><li>home</li></Link>
                    <Link to="./info"><li>info</li></Link>
                    <Link to="./itemList">  <li>discography</li></Link>
                    <a href="https://www.pinkfloyd.com/" target="blank_"><li>official site</li></a>
                    <Link to="./gallery"> <li>gallery</li></Link>
                </ul>
            </div>
            <div >
                <div className="footer">
                    <img src={logoMarian} alt="Logo Mariano Grimaldi" />
                    <p>to.the.top</p>
                    <p>WEB DEVELOPMENT by MARIANO GRIMALDI</p>
                </div>
                <div className="flexRedes">
                    <a href="https://api.whatsapp.com/send?phone=5493406421065" target="blank"><img src={logoW} alt="" /></a> 
                    <a href="https://www.instagram.com/mariano.grimaldi1106/" target="blank"><img src={logoI} alt="" /></a> 
                    <a href="https://www.facebook.com/mariano.grimaldi.714/" target="blank"><img src={logoF} alt="" /></a>
                </div>
            </div>
            <div>
                <img src={logo} className="logoFooter" alt="Logo Pink Floyd" />
            </div>   
        </footer>
    )
}

export default Footer