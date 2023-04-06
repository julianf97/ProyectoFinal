import '../ItemListContainer/itemListContainer.scss';
import { Item } from '../Item/Item';


export const ItemList = ( {items} ) => {
    return(
        <div>
            <div className='contenedorTituloProductos'>
                <h2>Productos</h2>
            </div>
            <hr/>

            <div className="contenedor-productos">

                { items.map((producto) => <Item key={producto.id} item={ producto }/>) }


            </div>
        </div>
    )
}