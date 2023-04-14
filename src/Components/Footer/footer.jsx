import "./footer.scss"
import logoMarian from "../../assets/img/logoMarian.png"
import logo from "../../assets/img/pink.png"


const Footer = () => {
    return (
        <footer className="footerFlex">
            <div>
            <ul className="ulFooter">
                <li>home</li>
                <li>band history</li>
                <li>discography</li>
                <li>gallery</li>
                <li>official site</li>
                <li>contact</li>
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