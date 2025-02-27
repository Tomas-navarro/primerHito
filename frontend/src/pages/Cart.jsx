import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas.js";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const addProduct = (id) => {
        setCart((prevCart) =>
            prevCart.map((pizza) =>
                pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
            )
        );
    };

    const subtractProduct = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((pizza) =>
                    pizza.id === id && pizza.count > 0
                        ? { ...pizza, count: pizza.count - 1 }
                        : pizza
                )
                .filter((pizza) => pizza.count > 0)
        );
    };

    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);

    return (
        <div className="body">
            <div className="container">
                <div className="card" style={{ width: "80rem", marginTop: "20px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Detalles del pedido:</h5>
                        <ul>
                            {cart.map((pizza) => (
                                <li className="listaCart" key={pizza.id}>
                                    <img className="pizzaCart" src={pizza.img} alt={pizza.name} />
                                    <p className="card-text">{pizza.name}</p>
                                    <p className="card-text">${pizza.price.toLocaleString()}</p>
                                    <button type="button" onClick={() => addProduct(pizza.id)} className="btn btn-outline-primary">+</button>
                                    <p className="card-text">{pizza.count}</p>
                                    <button type="button" onClick={() => subtractProduct(pizza.id)} className="btn btn-outline-danger">-</button>
                                </li>
                            ))}
                        </ul>
                        <div className="card-footer">
                            <h2>Total: ${totalPrice.toLocaleString()}</h2>
                            <button type="button" className="btn btn-dark" style={{ marginTop: "20px" }}>
                                Pagar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
