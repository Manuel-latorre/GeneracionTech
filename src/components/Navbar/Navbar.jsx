import logo from '../../assets/logo.png'
import { useState } from 'react';
import './Navbar.css'
import Loader from '../Loader/Loader'


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [showLoader, setShowLoader] = useState(false);

    const handleLoader = () => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
        }, 500);

    };

  return (
    <nav className='navbar'>

        <div style={{display:'flex', alignItems:'center'}}>
            <img className='logo' src={logo} alt='logo'/>
        
        </div>
        <div className={`nav_items ${isOpen && 'open'}`}>
            <a onClick={handleLoader} href="#nosotros">Nosotros</a>
            <a onClick={handleLoader} href="#servicios">Servicios</a>
            <a onClick={handleLoader} href="#equipo">Equipo</a>
            <a onClick={handleLoader} href="#contacto">Contacto</a>
        </div>

        <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
        {showLoader && <Loader />}
    </nav>
  );
}

export default NavBar;