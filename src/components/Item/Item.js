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
                    <div className="contenedorTituloItem">
                        <h4>{item.name}</h4>
                    </div>
                    <div className="disponible-precio">
                        <p className="disponible">DISPONIBLE</p>
                        <p className="precio"><strong>${item.price}</strong></p>
                    </div>
                </Link>
            </div>
            <div className="contenedor-btn-detail">
                
                {
                    isInCar(item.id)
                        ?  <Link to="/cart"><button className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                        Terminar mi compra
                        </button></Link>
                        :  <button onClick={ handleAgregar } className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                        Agregar
                        </button>
                }
            </div>
        </div>
    )
}