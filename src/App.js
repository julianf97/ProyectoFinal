import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemCountEventos } from './components/ItemCountEventos';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Inicio } from './components/Inicio/Inicio';
import { CartProvider } from './context/CartContext/CartContext';
import { Slider } from './components/Slider/Slider';
import { Cart } from './components/Cart/Cart';
import { SeccionHardwarePrincipal } from './components/SeccionHardwarePrincipal/SeccionHardwarePrincipal';
import { SeccionHardwareSecundaria } from './components/SeccionHardwareSecundaria/SeccionHardwareSecundaria';
import { Login } from './components/Login/Login';
import { LoginProvider } from './context/LoginContext/LoginContext';
import AppRouter from './routes/AppRouter';

/*


Custom Provider 

En el custom provider lo que hacemos es exportar toda la funcionalidad de nuestro contexto como un componente.

Creamos el proovedor como un componente basicamente.


*/ 


function App() {



  return (
    <div>
      <LoginProvider>
        <CartProvider>
            <AppRouter/>
        </CartProvider>
      </LoginProvider>
    </div>
  )
}

export default App;