import logo from '../../assets/logo.png'
import { useState } from 'react';
import './Navbar.css'


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='navbar'>

        <div style={{display:'flex', alignItems:'center'}}>
            <img className='logo' src={logo} alt='logo' />
            <div style={{display:'flex', flexDirection:'column', marginLeft:15}}>
                <p style={{fontSize:26}}>Generación</p>
                <strong style={{color: '#00ccc4', fontSize:26}}>Tech</strong>
            </div>
        </div>
        <div className={`nav_items ${isOpen && 'open'}`}>
            <a href="#sobreMi">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#tecnologias">Equipo</a>
            <a href="#titulos">Contacto</a>
        </div>

        <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  );
}

export default NavBar;