import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./navbar_nav.scss"



export const NavbarNav = () => {
    
    return(
        <div className="contenedor__nav">
            <nav className="nav">
                <ul>
                    <Link to={'/'} className="enlace"><li>Inicio</li></Link>
                    <Link to={'/productos/auriculares'} className="enlace"><li>Auriculares</li></Link>
                    <Link to={'/productos/gabinete'} className="enlace"><li>Gabinete</li></Link>
                    <Link to={'/productos/monitores'} className="enlace"><li>Monitores</li></Link>
                    <Link to={'/productos/pcarmada'} className="enlace"><li>Pc Armada</li></Link>
                </ul>
            </nav>
        </div>
    )
}