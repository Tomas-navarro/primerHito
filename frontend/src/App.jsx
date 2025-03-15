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
import PizzaProvider from './context/PizzaContext';
import HomeProvider from './context/HomeContext';
import UserProvider from './context/UserContext';
import ProtectedRoute from './context/ProtectedRoute';
import PublicRoute from './context/PublicRoute';


function App() {
  return (
    <>
      <UserProvider>
        <CartContext>
          <HomeProvider>
            <PizzaProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
              <Footer />
            </PizzaProvider>
          </HomeProvider>
        </CartContext>
      </UserProvider>
    </>
  )
}

export default App
