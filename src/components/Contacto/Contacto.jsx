import React, {useState} from 'react'
import './Contacto.css'
import Loader from '../Loader/Loader';


const Contacto = () => {
  const [showLoader, setShowLoader] = useState(false);

    const handleLoader = () => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
        }, 1000);

    };
  return (
    <div style={{marginBottom:100}} id='contacto'>
        <hr style={{color:'#f2f2f2', width: '90vw', margin:'auto', marginTop: 100, marginBottom: 50}} />
        <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>CONTACTO</p>

        <div className='form'>
            <input className='inputForm' type="text" placeholder='Introduzca su nombre ...' />
            <input className='inputForm' type="text" placeholder='Introduzca su Email ...'/>
            <input className='inputForm' type="text" placeholder='Introduzca su telefono ...'/>
            <textarea className='textArea' placeholder='Contanos en que podemos ayudarte ...'></textarea>

            <button onClick={handleLoader} className='btnEnviar'> ENVIAR </button>
        </div>
        {showLoader && <Loader />}
    </div>
  )
}


export default Contacto