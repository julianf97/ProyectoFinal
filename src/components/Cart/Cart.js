import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext/CartContext"
import "./cart.scss"
import "../ItemDetail/itemDetail.scss"


export const Cart = () => { 

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if ( cart.length === 0 ){
        return (
            <div className="contenedorSinProductos"> 
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link to={"/"}>
                    <button className="btnVolver">Volver</button>
                </Link>
            </div>
        )
    }

    return(

        <div className="contenedorCarrito">
            <div className="contenedorTitulo">
                <h2>Tu Compra</h2>
                <hr/>
            </div>
            <div className="contenedorProductos">
                {
                    cart.map((prod) => (
                        <div key={prod.id} className="itemInCart">
                            <div>
                                <h4 className="contenedorTituloItem">{prod.name}</h4>
                            </div>
                            <div className="contenedorImg">
                                <img src={prod.img} alt={prod.name}/>
                            </div>
                            <p>Precio: ${prod.price * prod.cantidad}</p>
                            <small>Precio unitario: {prod.price}</small>
                            <small>Cantidad: {prod.cantidad}</small>
                            <button 
                                onClick={ () => eliminarDelCarrito(prod.id) } 
                                className="btnEliminar"> Eliminar
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="contenedorTotalCompra">
                <h3 className="totalCompra">
                    Total: ${totalCompra().toFixed(2)}
                </h3>
                <div className="contenedorBotonVaciar">
                    <button onClick={ vaciarCarrito } className="btn-vaciar-carrito">Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}