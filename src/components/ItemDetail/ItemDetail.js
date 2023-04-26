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

    const [mediosEnvio, setMediosEnvio] = useState(false);

    const [mediosPago, setMediosPago] = useState(false);

    const { agregarAlCarrito, isInCar } = useContext(CartContext);

    const handleZoomImg = () => {
        setZoomVisible(true);
    }

    const handleExitZoom = () => {
        setZoomVisible(false);
    }
    
    const handleMediosEnvio = () => {
        setMediosEnvio(true);
    }
    
    const handleExitEnvio = () => {
        setMediosEnvio(false);
    }

    const handleMediosPago = () => {
        setMediosPago(true);
    }

    const handleExitPago = () => {
        setMediosPago(false);
    }

    console.log(isInCar(item.id))


    
    const handleAgregar = () => {
        const newItem =  {
            ...item, 
            cantidad, 
        }
        
        agregarAlCarrito(newItem)
    }

    return (
        <div className="contenedorGral">
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
                {
                    mediosEnvio
                    ? <div className="zoomEnvio">
                        <div className="contenedorInfo">
                            <div className="contenedorCruz">
                                <FontAwesomeIcon onClick={ handleExitEnvio } className="cruzEnvio" icon={ faXmark }/>
                            </div>
                            <div className="contenedorTituloInfo">
                                <h1>Estos son nuestros medios de envio disponibles</h1>
                            </div>
                            <div className="opcionesEnvio">
                                <div className="opcion">
                                    <h6>Retirar en Local</h6>
                                    <p>Retira directamente por nuestro local</p>
                                </div>
                                <div className="opcion">
                                    <h6>Envió dentro de Circunvalación (Córdoba Capital)</h6>
                                    <p>Valido para Córdoba Capital dentro del anillo.</p>
                                </div>
                                <div className="opcion">
                                    <h6>Envió a Sucursal (Andreani)</h6>
                                    <p>Envió por andreani (Demora de 3 a 5 días) Solo puede recibir la compra el titular de la tarjeta o cuenta con la que se realizo el pago.</p>
                                </div>
                                <div className="opcion">
                                    <h6>Envió a Domicilio (Andreani)</h6>
                                    <p>Envió por andreani (Demora de 3 a 7 días) Solo puede recibir la compra el titular de la tarjeta o cuenta con la que se realizo el pago.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :<div></div>
                }
                {
                    mediosPago
                    ? <div className="zoomEnvio">
                        <div className="contenedorInfo">
                            <div className="contenedorCruz">
                                <FontAwesomeIcon onClick={ handleExitPago} className="cruzEnvio" icon={ faXmark }/>
                            </div>
                            <div className="contenedorTituloInfo">
                                <h1>Estos son nuestros medios de pago disponibles</h1>
                            </div>
                            <div className="opcionesEnvio">
                                <div className="opcion">
                                    <h6>Efectivo</h6>
                                    <p>Abona en efectivo al recibir tu producto (Solo Córdoba Capital) o al retirar en nuestro local.</p>
                                </div>
                                <div className="opcion">
                                    <h6>Cuotas con Tarjeta de Crédito</h6>
                                    <p>Abona en cuotas. SOLO PUEDE RECIBIR LA COMPRA QUIEN REALIZA EL PAGO.</p>
                                </div>
                                <div className="opcion">
                                    <h6>Transferencia Bancaria</h6>
                                    <p>Deposita o transferí en nuestra cuenta bancaria. SOLO PUEDE RECIBIR LA COMPRA QUIEN REALIZA LA TRANSFERENCIA.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :<div></div>
                }
                <div className="itemImg">
                    <div className="contenedorDetallesDeImg">
                        <div className="contenedorInternoDetallesImg">
                            <Link to={'/inicio'}>
                                <div className="contenedorPalabraHome">
                                    <h6>home</h6>
                                </div>
                            </Link>
                            <Link to={`/productos/${item.category}`}>
                                <div className="contenedorPalabraAuriculares">
                                    <h6>{item.category}</h6>
                                </div>
                            </Link>
                            <div className="contenedorTituloArribaImagen">
                                <h6>{item.name}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="alineadorImg">
                        <div className="contenedor-img">
                            <button onClick={ handleZoomImg } className="contenedorLupaImg">
                                <FontAwesomeIcon className="lupaImg" icon={ faMagnifyingGlassPlus }/>
                            </button>
                            <img src={item.img} alt={item.name}/>
                        </div>
                    </div>
                </div>
                <div className="contenedorMedio">
                    <div className="itemInfo">
                        <div className="contenedorTitulo">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="subtituloCategory">
                            <div className="contenedorCategory">
                                <Link to={`/productos/${item.category}`}>
                                    <button>
                                        <div className="cuadradoCategory">
                                            <p>
                                                {item.category}
                                            </p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                            <div className="contenedorDescripcionSub">
                                <div className="cuadradoDescripcion cuadradoCod">
                                    <h6>Cod</h6>
                                    <p>{item.cod}</p>
                                </div>
                                <div className="cuadradoDescripcion">
                                    <h6>Stock</h6>
                                    {
                                        item.stock > 5 
                                        ? <p className="disponible"> DISPONIBLE </p>
                                        : <p className="stockBajo" > STOCK BAJO </p>
                                    }
                                </div>
                                {
                                    item.marcas
                                    ?   <div className="cuadradoDescripcion">
                                            <h6>Marcas</h6>
                                            <p>{item.marcas}</p>
                                        </div>
                                    : <div></div>
                                }
                            </div>
                        </div>
                        <div className="contenedorFinalMedio">
                            <div className="metodosDeEnvio">
                                <div className="contenedorInternoEnvio">
                                    <div className="contenedorImg">
                                        <img src="/img/icons/free-delivery.png" alt="iconFreeDelivery"></img> 
                                    </div>
                                    <div className="contenedorTexto">
                                        <div className="contenedorTitulo">
                                            <div className="contenedorInteriorTitulo">
                                                    <h5>Medios de Envío</h5>
                                            </div>
                                        </div>
                                        <div className="contenedorSubtitulo">
                                            <div className="contenedorInteriorSubtitulo">
                                                <button onClick={ handleMediosEnvio }>
                                                    <h6>Ver todos los medios de envío</h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="metodosDeEnvio">
                                <div className="contenedorInternoEnvio">
                                    <div className="contenedorImg">
                                        <img src="/img/icons/paymentSecurity.png" alt="iconFreeDelivery"></img> 
                                    </div>
                                    <div className="contenedorTexto">
                                        <div className="contenedorTitulo">
                                            <div className="contenedorInteriorTitulo">
                                                <h5>Medios de pagos</h5>
                                            </div>
                                        </div>
                                        <div className="contenedorSubtitulo">
                                            <div className="contenedorInteriorSubtitulo">
                                                <button onClick={ handleMediosPago }>
                                                    <h6>Ver todos los medios de envío</h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenedorDerecho">
                    <div className="barraSeparadora"></div>
                    <div className="contenedorInternoContenido">
                        <div className="contenedorPrecio">
                            <div className="contenedorInternoPrecio">
                                <div className="tituloPrecio">
                                    <h4 className="textoPrecio">${item.price}</h4>
                                </div>
                                <div className="subtituloPrecio">
                                    <h6>PRECIO ESPECIAL EFECTIVO O TRANSFERENCIA</h6>
                                </div>
                            </div>
                        </div>
                        <div className="palabraCantidad">
                            <h5 className="cantidad">Cantidad</h5>
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
                    </div>
                </div>
            </div>
            <div className="contenedorDescripcion">
                <div className="tituloDescripcion">
                    <h3>Descripción</h3>
                </div>
                <div className="contenedorInteriorDescripcion">
                    <div className="contenedorTextoDescripcion">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
