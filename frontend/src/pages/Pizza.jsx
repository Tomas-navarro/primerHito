import { useContext} from 'react';
import Card from '../components/Card';
import { PizzaContext } from '../context/PizzaContext';

const Pizza = () => {
  const {info} = useContext(PizzaContext)
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

