import React from 'react'
import './Bienvenidos.css'
import logo from '../../assets/logo.svg'

const Bienvenidos = () => {
  return (
    <div style={{marginTop:100}}>
      <main className='main'>
        <div className='sectionImgBienvenidos'>
          <img className='logoBienvenidos' src={logo} alt="" />
        </div>

        <div className='sectionBienvenidos'>
          <p className='textBienv'> Bienvenidos a </p>
          <p className='textGen'>GENERACIÓN </p>
          <p className='textGen' style={{color:'#00ccc4'}}>TECH</p>
        </div>

      </main>
      <hr style={{color:'#f2f2f2', width: '90vw', margin:'auto', marginTop: 100, marginBottom: 50}} />
    </div>
    
  )
}

export default Bienvenidos