import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import "./login.scss"
import { useContext, useState } from "react"

import { LoginContext } from "../../context/LoginContext/LoginContext"




export const Login = () => {

    const { user, tryLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: ' ',
        password: ' '
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        tryLogin(values)
    }

    const handelInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }

    return (
        <div className="contenedorFormularioUser">
            <div className="login">
                <div className="contenedorTitulo">
                    <h2>Login</h2>
                    <hr/>
                </div>
                <div className="contenedorForm">
                   <form onSubmit={handleSubmit} className="form">
                        <label htmlFor="input-group-1"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input onChange={handelInputChange} name="email" type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
                        </div>
                        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <FontAwesomeIcon icon={ faLock }/>
                            </span>
                            <input onChange={handelInputChange} name="password" type="password" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"/>
                        </div>


                        <div className="contenedorbtn">
                            <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            Sign in
                            </button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )

}
