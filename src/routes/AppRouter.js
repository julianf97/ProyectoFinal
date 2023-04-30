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
import Checkout from '../components/checkout/Checkout';




const AppRouter = () => {

    return(
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='*' element={<Navigate to={"/inicio/"}/>}/>
                    <Route path='/' element={<Inicio/>}/> 
                    <Route path='/inicio' element={<Inicio/>}/>   
                    <Route path='/contadorEventos' element={<ItemCountEventos/>}/>
                    <Route path='/productos/' element={<ItemListContainer/>}/>
                    <Route path='/cart/' element={<Cart/>}/>
                    <Route path='/checkout/' element={<Checkout/>}/>
                    <Route path='/user/' element={<Login/>}/>
                    <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
                </Routes>
        </BrowserRouter>
    )

}

export default AppRouter