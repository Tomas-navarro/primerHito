import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


const Cart = () => {
    const { cart, addProduct, subtractProduct, totalPrice, cartCheckout } = useContext(CartContext) // consumo el context
    const { user } = useContext(UserContext);
    const mostrarAlerta = (title, text, icon) => {
        Swal.fire({ title, text, icon });
    };
    const handleCart = () => {
        cartCheckout(cart)
        mostrarAlerta("Carrito Pagado", "", "success");
    }
    return (
        <div className="body">
            <div className="container">
                <div className="card" style={{ width: "80rem", marginTop: "20px" }}>
                    <div className="card-body row">
                        <h5 className="card-title">Detalles del pedido:</h5>
                        <ul>
                            {cart.map((pizza) => (
                                <li className="listaCart" key={pizza.id}>
                                    <img className="pizzaCart col-2" src={pizza.img} alt={pizza.name} />
                                    <p className="card-text col-2">{pizza.name}</p>
                                    <p className="card-text col-2">${pizza.price.toLocaleString()}</p>
                                    <button type="button col-2" onClick={() => addProduct(pizza.id)} className="btn btn-outline-primary">+</button>
                                    <p className="card-text text-center col-2">{pizza.count}</p>
                                    <button type="button col-2" onClick={() => subtractProduct(pizza.id)} className="btn btn-outline-danger">-</button>
                                </li>
                            ))}
                        </ul>
                        <div className="card-footer">
                            <h2>Total: ${totalPrice.toLocaleString()}</h2>
                            {
                                user ? (
                                    <button type="button" className="btn btn-dark" onClick={handleCart} style={{ marginTop: "20px" }}>Pagar</button>
                                ) : (<button type="button" className="btn btn-dark" disabled style={{ marginTop: "20px" }}>Pagar</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
