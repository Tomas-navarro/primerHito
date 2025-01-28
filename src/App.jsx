import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>
      
      <body>
        <div className="container">
          <Home/>
        </div>
      </body>

      <footer>
        <Footer/>
      </footer>


    </>
  )
}

export default App
