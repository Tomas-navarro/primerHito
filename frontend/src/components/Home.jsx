import { useEffect, useState } from 'react';
import CardPizza from './CardPizza'
import Header from './Header';
//import { pizzas } from "/src/assets/js/pizzas.js";

const Home = () => {
  const [info, setInfo] = useState([])
  useEffect(()=>{
    consultarApi()
  },[])


  const consultarApi = async () =>{
    const url = "http://localhost:5000/api/pizzas"
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data)
  }
  return (
    <>

      <div className="containerHome">
        <div className="containerHeader">
           <Header/>
        </div>
        
        <div className="containerPizzas">
          {info.map((info)=><CardPizza key={info.id} name={info.name} price={info.price} ingredients={info.ingredients} img={info.img}/>)}
        </div>
      </div>
    </>
  );
};


export default Home