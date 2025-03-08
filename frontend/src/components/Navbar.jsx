import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    const {totalPrice} = useContext(CartContext)
    const token = false;
    
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>
                    <div className="navbar-nav gap-3 d-flex flex-row">
                        <Link to="/" className="nav-link active border border-light px-2 rounded" aria-current="page">🍕Home</Link>
                        {token ? (
                            <>
                                <Link to="/profile" className="nav-link active border border-light px-2 rounded" aria-current="page">🔐Profile</Link>
                                <Link to="/" className="nav-link active border border-light px-2 rounded" aria-current="page">🔐Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link active border border-light px-2 rounded" aria-current="page">🔓 Login</Link>
                                <Link to="/register" className="nav-link active border border-light px-2 rounded" aria-current="page">🔓 Register</Link>
                            </>
                        )}
                        <Link to="/cart" className="nav-link active border border-info rounded text-info position-absolute px-2 top-0 end-0 me-2 mt-2" aria-current="page">🛒 Total: ${totalPrice.toLocaleString()}</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default Navbar