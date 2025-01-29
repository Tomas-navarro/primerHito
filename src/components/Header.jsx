import headerImg from '../assets/img/Header.jpg';

const Header = () => {
  return (
    <>
        <div className="imagenFondo">
            <img src={headerImg} alt="Imagen de fondo" />
            <h1 className='textCenter'>!Pizzería Mamma Mia!</h1>
            <p className='textCenter'>!Tenemos las mejores pizzas que podras encontrar!</p>
        </div>
    </>
  )
}

export default Header