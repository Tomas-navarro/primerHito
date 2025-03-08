import { createContext, useEffect, useState } from "react"

export const PizzaContext = createContext();
const PizzaProvider = ({children}) => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarPizza();
  }, []);

  const consultarPizza = async () => {
    try {
      const url = `http://localhost:5000/api/pizzas/p001`;
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.log(error.message)
    }
  }
  const stateGlobal={
    info
  }
  return (
      <PizzaContext.Provider value={stateGlobal}>
        {children}
      </PizzaContext.Provider>
  )
}

export default PizzaProvider