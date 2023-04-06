
//   protocolo |  dominio       | endopoints | params
// URL: https://www.coderhouse.com/alumnos?id=1

// simulando peticion a API con query params

// query params || GET || curso = string | number | limit = number

// URL :  https://www.coderhouse.com/alumnos=curso=reactjs&limit20

// url params: GET 
// URL : https: //www.coderhouse.com/alumnos/{id}/{curso}
// URL : https: //www.coderhouse.com/alumnos/12342/reactjs

/*  Header


    El header es informacion sobre la petición, datos especificos de la petición 

    Los encabezados cuando hacemos la petición, se configuran automaticamente, y en algunos casos, si la api con la cual nos conectamos asi lo requiere, podemos modificarlos




    Body


    cuando queremos enviar datos en forma de objeto con informacion sensible lo hacemos a traves del body 

    trabajamos con el body de la petición cuando tenemos que enviar recursos, cuando hacemos peticions de tipo post put o patch, cuando hago una peticion de tipo get no adjuntamos el body porque no estamos enviando datos.

*/    
/* Y todo esto lo trabajamos con fetch que a su funcionamiento es a traves de promesas
    Sintaxis: recibe la URL a donde vamos a pedir o enviar datos, y podemos ponerle un segundo parametro que es opcional que es un objeto, en este segundo objeto podemos modificar los headers de la petición, puedo modificar el metodo porque toda peticion hecha con fetch por defecto trae un get

    cuando tengo que enviar recursos:

    fetch(URL, objetoOpcional{ 
        method: 'POST',
        headers: {
            'apiKey' : "iasdjisdjisad | 213- .21,41-15"
        },
        body: {
            array
        }
    })    

    fetch(url)
        .then()
        .catch()
        .finally()


*/

