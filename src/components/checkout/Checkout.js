import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navigate } from 'react-router-dom';
import { faAddressCard, faLocationDot} from "@fortawesome/free-solid-svg-icons"
import Swal from "sweetalert2";
import { createContext, useContext, useState } from "react"
import "./contenedorCheckout.scss"
import "../Login/login.scss"
import { CartContext } from "../../context/CartContext/CartContext";
import { collection, addDoc, writeBatch, updateDoc, doc, getDoc, documentId, where, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {

   const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

   const [ orderId, setOrderId ] = useState(null)

    const modalErrorNombre = () => {
    
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Nombre no valido'
        })
        
    }
    const modalErrorDireccion = () => {
    
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Direccion no valida'
        })
        
    }
    const modalErrorEmail = () => {
    
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Email no valido'
        })
        
    }

    const modalErrorStock = () => {
    
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Hay items sin stock'
        })
        
    }

    const modalSucces = () => {
    
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Compra Realizada'
        })
        
    }

    const [values, setValues] = useState({
        nombre: ' ',
        direccion: ' ',
        email: ' '
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Submit", values)

        // validaciones
        if (values.nombre.length < 3){
            modalErrorNombre()
            return
        }
        if (values.direccion.length < 3){
            modalErrorDireccion()
            return
        }
        if (values.email.length < 5){
            modalErrorEmail()
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({name: prod.name, id: prod.id, price: prod.price, cantidad: prod.cantidad})),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, 'productos')

        const outOfStock = []


        console.log(cart.map(prod => prod.id))

        const itemsRef = query( productosRef, where(documentId(), "in", cart.map(prod => prod.id)) )

        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) =>{
            const item = cart.find(prod => prod.id === doc.id)

            if(doc.data().stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0){
            await batch.commit()

            addDoc(ordersRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
            })

        } else{
            modalErrorStock()
        }

 
        

    }

    const handelInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }

    if(orderId){

        modalSucces()

        return(
            <div className="contenedorCompraExito">
                <div className="contenedorInternoCompraExito">
                    <div className="contenedorTexto">
                        <div className="contenedorTitulo">
                            <div className="contenedorInternoTitulo">
                                <h2> ¡Tu compra fue realizada con exito!</h2>
                            </div>
                        </div>
                        <div className="contenedorP">
                            <h5>Id de compra:</h5>
                            <h5>{orderId}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    if(cart.length === 0){
        return(
            <Navigate to={"/"}/>
        )
    }

    return(
        <div className="contenedorCheckout">
            <h2>Checkout</h2>
            <div className="contenedorForm">
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="input-group-1"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu Nombre</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FontAwesomeIcon icon={ faAddressCard }/>
                        </div>
                        <input onChange={handelInputChange} value={values.nombre} name="nombre" type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tu nombre"/>
                    </div>
                    <label htmlFor="input-group-1"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FontAwesomeIcon icon={ faLocationDot }/>
                        </div>
                        <input onChange={handelInputChange} value={values.direccion} name="direccion" type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Direccion"/>
                    </div>
                    <label htmlFor="input-group-1"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input onChange={handelInputChange} value={values.email} name="email" type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
                    </div>
                    <div className="contenedorbtn">
                        <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout