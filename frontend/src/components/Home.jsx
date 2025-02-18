import CardPizza from './CardPizza'
import Header from './Header';
import { pizzas } from "/src/assets/js/pizzas.js";

const Home = () => {
  return (
    <>

      <div className="containerHome">
        <div className="containerHeader">
           <Header/>
        </div>
        
        <div className="containerPizzas">
          {pizzas.map((pizza) => <CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img}/>)} 
        </div>
      </div>
    </>
  );
};


export default Home