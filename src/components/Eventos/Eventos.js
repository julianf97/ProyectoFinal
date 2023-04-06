/* Eventos

Tenemos tipos de eventos que son automaticos que responden a la escucha de alguna accion o inaccion del usuario, por ejemplo: el cartel que sale en netflix automaticamente para preguntar si todavía estas viendo

Y los eventos manuales que son los mas comunes y los que mas voy a tener que crear, son aquellas interacciones directas con el usuario, la aplicacion escucha los eventos que el usuario quiere hacer

el addEventListener en React es casi reemplazado por el on antes del nombre del evento por ejemplo onClick, pero sin embargo hay momentos en que necesito usar el addEventListener si o si como por ejemplo cuando quiero trabajar con el objeto window, eso debo hacerlo con el addEventListener porque no es algo que yo pueda manejarlo con el DOM, porque es un objeto que está por encima del documento, por ejemplo:

window.addEventListener('nombre de evento que quiero escuchar', referencia  de la funcion de callback a registrar);

window.addEventListener('recize', onResize);

Basicamente tenemos que recurrir al addEventListener cuando tenemos que trabajar con nodos que están por encima del componente del cual estamos trabajando
*/

import { useEffect } from "react"
import "./eventos.scss"

export const Eventos = () => {
   
  /* 
  
  Como el nodo window está por encima del documento, por mas de que nosotros desmontemos el componente, la funcion click se va a seguir ejecutando si no hacemos su efecto de desmontaje en el return del useEffect, y tambien tenemos que declarar la funcion en una variable porque si la hacemos anonimas solo con el arrow function, el return no va a tener referencia para hacer el desmontaje. 
  
  */

  const clickContenedor = () => {
    console.log("click contenedor")
  }


  useEffect(() => {

    const clickear = () => {
      console.log("click")
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])


  /* 
  
  React y los eventos
  
  
  Eventos sinteticos: son objetos de eventos reducidos en su escritura, y garantiza tener las propiedades y valores escenciales para resolver lo que queremos en relacion con el evento asociado, y que sea compatible para todos los navegadores evitando errores. 
  
  
  Simetría Unidireccional
  

  
  */ 

  return (
      <div onClick={clickContenedor} className="componenteeventos">
          <h3>Eventos</h3>
      </div>
    )
}