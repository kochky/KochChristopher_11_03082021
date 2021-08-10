import img from "../images/LOGO.png"
import { Link } from 'react-router-dom'


function Header (){
    return  (
        <div className="Header">
            <img alt="logo Kasa" src={img}/>
            <nav>
                <Link to="/" className="link-navbar" >Accueil</Link>
                <Link to="/propos" className="link-navbar" >A Propos</Link>
            </nav>
        </div>
    )
}

export default Header