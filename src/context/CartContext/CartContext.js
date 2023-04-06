import { createContext } from "react"
import { useContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([])
  
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
  
    const isInCar = (id) => {
      return cart.some((prod) => prod.id === id)
    }
  
    const totalCantidad = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }
    
    const vaciarCarrito = () => {
      setCart([])
    }

    const eliminarDelCarrito = (id) => {
      setCart( cart.filter((prod) => prod.id !== id) )
    }

    return(
        
        <CartContext.Provider value={{
            cart, 
            agregarAlCarrito,
            isInCar, 
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito
          }}>
            {children}
        </CartContext.Provider>
    )

}