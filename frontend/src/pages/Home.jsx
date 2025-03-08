import { useContext } from 'react';
import CardPizza from '../components/CardPizza'
import Header from '../components/Header';
import { HomeContext } from '../context/HomeContext';
//import { pizzas } from "/src/assets/js/pizzas.js";

const Home = () => {
  const {info} =useContext(HomeContext)
  return (
    <>
      <div className="containerHome">
        <div className="containerHeader">
           <Header/>
        </div>
        
        <div className="containerPizzas">
          {info.map((info)=><CardPizza key={info.id} id={info.id} name={info.name} price={info.price} ingredients={info.ingredients} img={info.img}/>)}
        </div>
      </div>
    </>
  );
};


export default Home