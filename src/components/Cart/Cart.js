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
            <div className="contenedorProductos">
                <div className="contenedorInternoProductos">
                    {
                        cart.map((prod) => (
                            <div key={prod.id} className="itemInCart">
                                <div className="contenedorTituloItem">
                                    <h4>{prod.name}</h4>
                                </div>
                                <div className="contenedorImg">
                                    <img src={prod.img} alt={prod.name}/>
                                </div>
                                <div className="contenedorInfo">
                                    <p className="precio">Precio: ${prod.price * prod.cantidad}</p>
                                    <small>Precio unitario: {prod.price}</small>
                                    <small>Cantidad: {prod.cantidad}</small>
                                </div>
                                <div className="contenedorBtnEliminar">
                                <button className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 my-1">Eliminar</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="contenedorTotalCompra">
                <h3 className="totalCompra">
                    Total: ${totalCompra().toFixed(2)}
                </h3>
                <div className="contenedorBotonVaciar">
                    <button onClick={ vaciarCarrito } className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}