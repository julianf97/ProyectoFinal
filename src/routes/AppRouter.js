import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar'
import { Inicio } from '../components/Inicio/Inicio';
import { ItemCountEventos } from '../components/ItemCountEventos'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { Cart } from '../components/Cart/Cart'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { useContext} from "react"
import { Login } from '../components/Login/Login'
import { LoginContext } from "../context/LoginContext/LoginContext"




const AppRouter = () => {

    const { user } = useContext(LoginContext)

    return(
        <BrowserRouter>
            {
                user.logged
                    ? <>
                        <Navbar/>
                        <Routes>
                            {/* Rutas Privadas */}
                            <Route path='*' element={<Navigate to={"/"}/>}/>
                            <Route path='/' element={<Inicio/>}/>   
                            <Route path='/contadorEventos' element={<ItemCountEventos/>}/>
                            <Route path='/productos/' element={<ItemListContainer/>}/>
                            <Route path='/cart/' element={<Cart/>}/>
                            <Route path='/user/' element={<Login/>}/>
                            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
                            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
                        </Routes>
                     </>
                    : <>
                    <Routes>
                        {/* Rutas Publicas */}
                        <Route path='/login/' element={ <Login/>} />
                        <Route path='*' element={ <Navigate to={'/login/'}/> }/>   
                    </Routes> 
                    </> 
            }
        </BrowserRouter>
    )

}

export default AppRouter