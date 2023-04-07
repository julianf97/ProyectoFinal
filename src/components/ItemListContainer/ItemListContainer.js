import { useEffect, useState } from "react";
import '../ItemListContainer/itemListContainer.scss';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()


    useEffect(() => {

        setLoading(true)

        pedirDatos()
        .then( (response) => {

            if(!categoryId){
                setProductos(response)
            } else{
                setProductos( response.filter((prod) => prod.category === categoryId) )
            }


            setLoading(false)
        })
        .catch( (error) => {
            
            console.log(error)

        })
        .finally( () => {
            setLoading(false)
        })

    }, [categoryId])

    /* 
    
        El renderizado condicional es similar a las rutas, la diferencia es que las rutas muestran una diferente vista dependiendo en la ruta que nos ubiquemos, cada ruta sería como una pieza diferente de la app, en cambio el renderizado condicional tiene dos elementos que dependiendo del valor del loading en este caso va a mostrar uno o el otro, pero los dos son parte del mismo componente
                
        cada elemento que yo renderizo condicionalmente pasa por su proceso de montaje y desmontaje

    */
 
    return (
        <div className="contenedor">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
                
            }
        </div>
    )
};

