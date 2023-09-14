import React from 'react'
import './Contacto.css'


const Contacto = () => {
  return (
    <div style={{marginBottom:100}}>
        <hr style={{color:'#f2f2f2', width: '90vw', margin:'auto', marginTop: 100, marginBottom: 50}} />
        <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>CONTACTO</p>

        <div className='form'>
            <input className='inputForm' type="text" placeholder='Introduzca su nombre ...' />
            <input className='inputForm' type="text" placeholder='Introduzca su Email ...'/>
            <input className='inputForm' type="text" placeholder='Introduzca su telefono ...'/>
            <textarea className='textArea' placeholder='Contanos en que podemos ayudarte ...'></textarea>

            <button className='btnEnviar'> ENVIAR </button>
        </div>
    </div>
  )
}


export default Contacto