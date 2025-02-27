import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Pizza = () => {
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

  return (
    <div className="centrado">
      <div className="container">
        {info && (
          <Card
            key={info.id}
            desc={info.desc}
            img={info.img}
            ingredients={info.ingredients}
            name={info.name}
            price={info.price}
          />
        )}
      </div>
    </div>

  );

};

export default Pizza;

