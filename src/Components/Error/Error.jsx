import "./Error.scss"
import { Link } from "react-router-dom"

const Error = () => {
    return(
        <div className="animation">
            <div className="flexError"> 
                <h2>You didn't select any album</h2> 
                <Link to="/itemList"><p>Click here and try again</p></Link>
            </div>
        </div>
    )
}

export default Error