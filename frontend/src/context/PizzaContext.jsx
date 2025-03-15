import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState(null);

  const getPizzaById = async (id) => {
    try {
      const url = `http://localhost:5000/api/pizzas/${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("No se encontró la pizza");
      }
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const stateGlobal = {
    pizza,
    getPizzaById, // Expone la función en el contexto
  };

  return (
    <PizzaContext.Provider value={stateGlobal}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
