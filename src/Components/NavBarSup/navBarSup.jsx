import "./navBarSup.scss"
import prisma from "../../assets/img/prisma.png"


const NavBarSup = () => {
   return (
        <nav className="navSupStyles">
            <ul className="ulFlex">
                <li>home</li>
                <li>band history</li>
                <li>discography</li>
                <li>gallery</li>
                <li>official site</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default NavBarSup