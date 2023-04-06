import "./item.scss"
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext"


export const Item = ( {item} ) => {

    const { agregarAlCarrito, isInCar } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem =  {
            ...item, 
            cantidad, 
        }
        
        agregarAlCarrito(newItem)
    }

    return (
        <div className="item">
            <div className="contenedorImgItem">
                <Link to={`/detail/${item.id}.`}>
                    <img className="imgItem" src={item.img} alt={item.name}/>
                </Link>
            </div>
            <div className="contenedorInfoItem">
                <Link to={`/detail/${item.id}.`}>
                    <h4>{item.name}</h4>
                    <p className="disponible">DISPONIBLE</p>
                    <p><strong>${item.price}</strong></p>
                </Link>
            </div>
            <div className="contenedor-btn-detail">
                
                {
                    isInCar(item.id)
                        ?  <Link to="/cart" className="btnTerminar">Terminar mi compra</Link>
                        :  <button onClick={ handleAgregar } className="btnDetail">Agregar</button>
                }
            </div>
        </div>
    )
}