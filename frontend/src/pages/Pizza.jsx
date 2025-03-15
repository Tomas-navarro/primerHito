import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { PizzaContext } from "../context/PizzaContext";

const Pizza = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const { pizza, getPizzaById } = useContext(PizzaContext);

  useEffect(() => {
    console.log("ID de la pizza recibido por useParams():", id); // Agregado para depuración
    if (id) getPizzaById(id);
  }, [id]);

  return (
    <div className="centrado">
      <div className="container">
        {pizza ? (
          <Card
            key={pizza.id}
            desc={pizza.desc}
            img={pizza.img}
            ingredients={pizza.ingredients}
            name={pizza.name}
            price={pizza.price}
          />
        ) : (
          <h2>Cargando pizza...</h2>
        )}
      </div>
    </div>
  );
};

export default Pizza;

