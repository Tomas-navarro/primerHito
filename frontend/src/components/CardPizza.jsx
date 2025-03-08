import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CardPizza = ({ id, name, price, ingredients, img }) => {
    const { addProduct } = useContext(CartContext)
    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle text-center mb-2 text-body-secondary">Ingredientes</h6>
                    <div className="card-text text-center"><ul>{ingredients.map((ingredient, index) => (<li key={index}>🍕 {ingredient}</li>))}</ul></div>
                    <h4 className="card-title text-center">Precio: ${price.toLocaleString()}</h4>
                    <div className="footerCard">
                        <Link to="/pizza/p001" className="btn btn-light">Ver Más 👀</Link>
                        <button type="button" onClick={() => addProduct(id)} className="btn btn-dark">Añadir 🛒</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardPizza