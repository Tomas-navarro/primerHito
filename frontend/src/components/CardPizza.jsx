import { Link } from "react-router-dom";

const CardPizza = ({ name, price, ingredients, img }) => {

    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle text-center mb-2 text-body-secondary">Ingredientes</h6>
                    <p className="card-text text-center">🍕{ingredients.map(ingredients => <li>{ingredients}</li>)}</p>
                    <h4 className="card-title text-center">Precio: ${price.toLocaleString()}</h4>
                    <div className="footerCard">
                        <Link to="/pizza/p001"className="btn btn-light">Ver Más 👀</Link>
                        <Link to="/pizza/p001"className="btn btn-dark">Añadir 🛒</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardPizza