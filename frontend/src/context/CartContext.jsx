import { createContext, useState } from "react";
import { pizzas } from "../assets/js/pizzas.js";
import axios  from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado inicial con pizzas
    const addProduct = (id) => {
        setCart((prevCart) => {
            const pizzaInCart = prevCart.find(pizza => pizza.id.toLowerCase() === id.toLowerCase());
            if (pizzaInCart) {
                return prevCart.map(pizza =>
                    pizza.id.toLowerCase() === id.toLowerCase() // error de id
                        ? { ...pizza, count: pizza.count + 1 }
                        : pizza
                );
            } else {
                const pizza = pizzas.find(pizza => pizza.id.toLowerCase() === id.toLowerCase());
                return pizza ? [...prevCart, { ...pizza, count: 1 }] : prevCart;
            }
        });
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
    const cartCheckout = async (cart) => {
        const token = localStorage.getItem('token')
        try{
            const res = await axios.post('http://localhost:5000/api/checkouts',
                {cart},
                {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
        }catch(error){
            console.error(error)
        }
    }
    const totalPrice = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
    // const para exportar todo de una vez
    const stateGlobal={
        cart,
        addProduct,
        subtractProduct,
        totalPrice,
        cartCheckout
      }
    return (
        <CartContext.Provider value={stateGlobal}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
