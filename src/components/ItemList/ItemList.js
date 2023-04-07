import '../ItemListContainer/itemListContainer.scss';
import { Item } from '../Item/Item';


export const ItemList = ( {items} ) => {
    return(
        <div>
            <div className="contenedor-productos">
                <div className='contenedorInternoProductos'>
                    { items.map((producto) => <Item key={producto.id} item={ producto }/>) }
                </div>
            </div>
        </div>
    )
}