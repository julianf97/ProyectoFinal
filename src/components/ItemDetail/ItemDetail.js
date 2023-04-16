import { Link, useNavigate } from "react-router-dom"
import { ItemCountEventos } from "../ItemCountEventos"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import "./itemDetail.scss"
import { CartContext } from "../../context/CartContext/CartContext"
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const ItemDetail = ( {item} ) => {

    
    const [cantidad, setCantidad] = useState(1);

    const [zoomVisible, setZoomVisible] = useState(false);

    const { agregarAlCarrito, isInCar } = useContext(CartContext);

    const handleZoomImg = () => {
        setZoomVisible(true);
    }
    
    const handleExitZoom = () => {
        setZoomVisible(false);
    }

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
            {
                zoomVisible 
                ? <div className="zoomImg">
                    <div className="contenedorSalida">
                        <div className="contenedorCruzZoom">
                            <FontAwesomeIcon onClick={ handleExitZoom } className="cruzZoom" icon={ faXmark }/>
                        </div>
                    </div>
                    <div className="contenedorImgZoom">
                        <div className="contenedorInternoImagenZoom">
                            <img src={item.img} alt={item.name}/>
                        </div>
                    </div>
                </div>
                : <div></div>
            }
            <div className="itemImg">
                <div className="contenedorDetallesDeImg">
                    <div className="contenedorInternoDetallesImg">
                        <div className="contenedorPalabraHome">
                            <h6>Home</h6>
                        </div>
                        <div className="contenedorPalabraAuriculares">
                            <h6>Auriculares</h6>
                        </div>
                    </div>
                </div>
                <div className="contenedor-img">
                    <button onClick={ handleZoomImg } className="contenedorLupaImg">
                        <FontAwesomeIcon className="lupaImg" icon={ faMagnifyingGlassPlus }/>
                    </button>
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
