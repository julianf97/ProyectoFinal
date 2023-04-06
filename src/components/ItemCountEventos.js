import "./_itemsCountsEventos.scss"
import "./_itemCounts.scss"

export const ItemCountEventos = ( {max, cantidad, setCantidad, onAdd} ) => {
    
    /*
    
        El componente ItemCountEventos recibe por propiedad la referencia de la funcion SetCantidad y tiene sus propias funciones que modifican este estado

        la idea de la referencia a la función es que nosotros modificamos el estado en el componente ItemCountEventos, pero la función se está ejecutando en el componente padre que es el ItemDetail y eso hace que el ItemDetail se modifique y se vuelva a renderizar nuevamente 
    
    */

    const handleSumar = () => {
        cantidad < max && setCantidad( cantidad + 1 )
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad( cantidad - 1 )
    }



    if( max === 0 ){
        return(
            <div>
                <h2><strong>No hay stock</strong></h2>
            </div>
        )
    }

    return (
        <div className="contenedor-general">
            <div className="contenedor-sumador">
                <button onClick={handleRestar}
                    className={ cantidad === 1 ? "botonRojo" : "boton"} 
                    disabled={ cantidad === 1 } 
                    > - </button>
                <span className="numeroCantidad">{cantidad}</span>
                <button onClick={handleSumar} className={ cantidad === max ? "botonRojo" : "boton"} >+</button>
            </div>
            <div className="contenedor-agregar">
                <button onClick={onAdd} className="boton">Agregar</button>
            </div>
        </div>
    )
}