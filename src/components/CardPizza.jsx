
const CardPizza = ({ name, price, ingredients, img }) => {

    return (
        <>

            <div className="card">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle text-center mb-2 text-body-secondary">Ingredientes</h6>
                    <p className="card-text text-center">🍕{ingredients.join(", ")}</p>
                    <h4 className="card-title text-center">Precio: ${price.toLocaleString()}</h4>
                    <div className="footerCard">
                        <a href="#" className="btn btn-light">Ver Más 👀</a>
                        <a href="#" className="btn btn-dark">Añadir 🛒</a>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default CardPizza