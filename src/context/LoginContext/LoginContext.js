import { createContext, useState } from "react"
import Swal from "sweetalert2";




export const LoginContext = createContext();

const MOCK_USERS = [
    {
        id: 1,
        email: 'admin@coder.com',
        password: 'coder'
    },
    {
        id: 2,
        email: 'turor@coder.com',
        password: 'coder2'
    },
    {
        id: 3,
        email: 'julianfinelli@hotmail.com',
        password: 'acedese'
    }

]


export const LoginProvider = ( { children } ) => {

    
    const modalError = () => {
    
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
            title: 'Email or password is incorrect'
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
            title: 'Signed in Succesfully'
        })
        
    }

    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    console.log(user)

    const tryLogin = ( values ) => {
        const match = MOCK_USERS.find((user) => user.email === values.email )

        if (match && match.password === values.password){

            modalSucces()

            setUser({
                logged: true,
                email: match.email
            })

        } else {
            modalError()
        }

    }

    const logOut = () => {
        setUser({
            logged: false,
            email: null
        })
    }



    return(
        
        <LoginContext.Provider value={{
            user,
            tryLogin,
            logOut,
        }}>
            {children}
        </LoginContext.Provider>
    )

}