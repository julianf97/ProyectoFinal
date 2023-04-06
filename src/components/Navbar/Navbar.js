import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavbarNav } from "./Navbar_nav";
import { CartWidget } from "./CartWidget";
import Select from "react-select";
import "./header.scss"
import "./header-mobile.scss"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

export const Navbar = () => {
    
    const links = [
        { label: "Todos los productos", value: "Todos los productos", href: ""  },
        { label: "Auriculares", value: "Auriculares", href: "auriculares"},
        { label: "Gabinete", value: "Gabinete", href: "gabinete" },
        { label: "Monitores", value: "Monitores", href: "monitores" },
        { label: "Pc Armada", value: "Pc Armada", href: "pcarmada" }
    ]

    const handleSelectChange = (link) => {
        
        return window.location.replace(`/productos/${link.href}`)
        
    }

    return(
        <header className="header">
            <div className="header__container">
                <div className="contenedor__izquierdo">
                    <div className="contenedor-barras-mobile">
                        <FontAwesomeIcon className="barrasMobile" icon={ faBars } />
                    </div>
                    <div className="contenedor-lupa-mobile">
                        <FontAwesomeIcon className="lupa" icon={faMagnifyingGlass}/>
                    </div>
                    <div className="contenedor__logo">
                        <Link to={"/"}>
                            <img src="/img/1058-logos-logofinal-9985.png" alt="logo"></img>
                        </Link> 
                    </div>
                    <div className="contenedor__select">
                        <Select className="selector-productos"
                            defaultValue = {{label: "Categorias", value: "empty"}}
                            options = {links}
                            onChange = {handleSelectChange}
                        />
                    </div>
                </div>
                <div className="contenedor__medio">
                    <div className="contenedor-logo-mobile">
                        <img src="/img/1058-logos-logofinal-9985.png" alt="logo"></img>
                    </div>
                    <div className="contenedor__buscador">
                        <input type="search" placeholder="¿ Que estás buscando ?" aria-label="Search"></input>
                        <div className="contenedor__lupa">
                            <FontAwesomeIcon className="lupa" icon={faMagnifyingGlass}/>
                        </div>
                    </div>
                    <div className="contenedor__navbar__nav">
                        <NavbarNav/>
                    </div>
                </div>
                <div className="contenedor__derecho">
                    <div className="contenedor__wsp">
                        <h4 className="titulo__wsp">Whatsapp</h4>
                        <h2 className="numero__wsp">+5493517719671</h2>
                    </div>
                    <div className="contenedorCart">
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </header>
    )
}