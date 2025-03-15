import { useContext } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const {totalPrice} = useContext(CartContext)
    const {user, logout} = useContext(UserContext)

    const navigate = useNavigate()
    const handleLogout = () => {
        console.log("Ejecutando logout...");
        logout();
        console.log("Redirigiendo a /login...");
        setTimeout(() => navigate("/login"), 100);
    };
    
    const setActiveClass = ({isActive}) => (isActive ? "nav-link active border border-light px-2 rounded" : "nav-link border border-light px-2 rounded") 
    
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>
                    <div className="navbar-nav gap-3 d-flex flex-row">
                        <NavLink to="/" className={setActiveClass} aria-current="page">🍕Home</NavLink>
                        {user ? (
                            <>
                                <NavLink to="/profile" className={setActiveClass} aria-current="page">🔐Profile</NavLink>
                                <NavLink className={setActiveClass} onClick={handleLogout} aria-current="page">🔐Logout</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className={setActiveClass} aria-current="page">🔓 Login</NavLink>
                                <NavLink to="/register" className={setActiveClass} aria-current="page">🔓 Register</NavLink>
                            </>
                        )}
                        <NavLink to="/cart" className="nav-link active border border-info rounded text-info position-absolute px-2 top-0 end-0 me-2 mt-2" aria-current="page">🛒 Total: ${totalPrice.toLocaleString()}</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default Navbar