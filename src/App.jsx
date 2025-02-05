import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  
  return (
    <>
      <header>
        <Navbar/>
      </header>


       {/* <Home/> */}
       <body>
          <Login/>
       </body>


      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
