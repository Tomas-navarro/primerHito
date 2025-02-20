import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
//import Login from './components/Login';
//import Register from './components/Register';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>

        {/*<Register/>*/}
        {/* <Login/>*/}
        {/*<Home/>*/}
        {/*<Cart/>*/}
        <Pizza/>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
