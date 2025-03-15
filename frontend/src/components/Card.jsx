const Card = ({ desc, img, ingredients = [], name, price = 0 }) => {
    return (
        <>
            <div className="cardPizza">
                <img src={img} alt="Pizza" />
                <div className="card-body">
                    <h2 className='text-start m-2'>{name}</h2>
                    <p className='text-start m-2'>{desc}</p>
                    <ul className="">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>🍕 {ingredient}</li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-evenly align-items-end">
                        <h2>Price: ${price.toLocaleString()}</h2>
                        <button type="button" className="btn btn-dark">Añadir 🛒</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card