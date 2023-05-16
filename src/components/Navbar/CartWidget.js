import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext/CartContext';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext/LoginContext";

export const CartWidget = () => {
    
    const { totalCantidad } = useContext(CartContext)
    const { user, logOut } = useContext(LoginContext)


    return(
    <div className="contenedor-user-cart"> 
        <div className="contenedor-cart">
            <Link className="enlace" to={'/cart/'}>
                <FontAwesomeIcon className="carrito" icon={faCartShopping}/>
                <span className="totalProductos">{ totalCantidad() }</span>
            </Link>
        </div>
    </div>
    )
}