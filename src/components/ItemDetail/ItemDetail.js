import { Link, useNavigate } from "react-router-dom"
import { ItemCountEventos } from "../ItemCountEventos"
import { ColorPicker } from "../ColorPicker/ColorPicker"
import { useContext, useState } from "react";
import "./itemDetail.scss"
import { CartContext } from "../../context/CartContext/CartContext"


export const ItemDetail = ( {item} ) => {

    
    const [cantidad, setCantidad] = useState(1)

    const { agregarAlCarrito, isInCar } = useContext(CartContext)

    console.log(isInCar(item.id))

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    
    const handleAgregar = () => {
        const newItem =  {
            ...item, 
            cantidad, 
        }
        
        agregarAlCarrito(newItem)
    }

    return (
        <div className="contenedor_item_detail">
            <div className="itemImg">
                <div className="contenedor-img">
                    <img src={item.img} alt={item.name}/>
                </div>
            </div>
            <div className="itemInfo">
                <div className="contenedorTitulo">
                    <h2>{item.name}</h2>
                </div>
                <div className="contenedorPrecio">
                    <p><strong>${item.price}</strong></p>
                </div>
                <div className="contenedorDescripcion">
                    <div className="contenedorInternoDescripcion">
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className="contenedorItemCounts">
                {
                    isInCar(item.id)
                        ?   <Link to="/cart" className="btnTerminar">Terminar mi compra</Link>
                        :   <ItemCountEventos
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                onAdd={handleAgregar}
                            /> 
                }
                </div>
                <div className="contenedorVolver">
                    <button onClick={handleVolver} className="btnVolver">Volver</button>
                </div>
            </div>
        </div>
    )
}
