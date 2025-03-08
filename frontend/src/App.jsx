import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './components/Profile';
import CartContext from './context/CartContext';
import PizzaProvider, { PizzaContext } from './context/PizzaContext';
import HomeProvider from './context/HomeContext';


function App() {

  return (
    <>
      <CartContext>
        <HomeProvider>
          <PizzaProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/pizza/p001' element={<Pizza />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
            <Footer />
          </PizzaProvider>
        </HomeProvider>

      </CartContext>

    </>
  )
}

export default App
