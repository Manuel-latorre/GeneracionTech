import './App.css'
import Bienvenidos from './components/Bienvenidos/Bienvenidos'
import Contacto from './components/Contacto/Contacto'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Nosotros from './components/Nosotros/Nosotros'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Servicios from './components/Servicios/Servicios'
import Mobile from './components/Servicios/Mobile/Mobile'

function App() {
  


  return (
    <div className="app">
      <Navbar/>
      <Bienvenidos/>
      <Nosotros/>
      <Mobile/>
      <Servicios/>
      <Equipo/>
      <Contacto/>
      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default App
