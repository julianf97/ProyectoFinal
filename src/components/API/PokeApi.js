
import { useEffect, useState } from 'react'
import './pokeApi.scss'

export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    console.log(pokemon);

    const handleSiguiente = () => {
        setId( id + 1 )
    }

    const handleAnterior = () => {
        id > 1 && setId( id - 1 )
    }


    useEffect(() => {
        
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        // el fetch no resuelve primero el resultado de lo que me traeria la API, sino que resuelve primero un objeto de tipo response que es un objeto que contiene informacion sobre la respuesta en si.

        // el metodo json en este caso va a devolver una promesa de la respuesta, y lo que nosotros debemos hacer es capturar la respuesta de la promesa del metodo json para poder obtener el resultado de la petición a la api

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setPokemon(data)
            })
        }, [id])

    return(
        <div className="contenedorPokeApi">
            <h2>PokeApi</h2>
            <hr/>
            {/* Acá usamos el operador AND para decirle que cuando el estado no tenga el valor null, que renderice la presentacion del pokemon, basicamente el operador AND me retorna el jsx de la derecha solamente cuando el estado que está a la izquierda tenga un valor valido */}
            {
                pokemon &&
                        <div className='contenedorPokemon'>
                            <h2>{pokemon.name}</h2>
                            <img className='imagenPokemon' src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        </div>
            }
            <div className='contenedor-botones'>
                <button onClick={handleAnterior} className='anterior'>Anterior</button>
                <button onClick={handleSiguiente}>Siguiente</button>
            </div>
        </div>
    )
}