import React from 'react'
import './Loader.css'
import logo from './logo1.svg'

const Loader = () => {
  return (
    <div className='loader'>
     <div class="cube-container">
        <div class="cube">
          <div class="face front"><img className='logoCubic' src={logo} alt="" /></div>
          <div class="face back"><img className='logoCubic' src={logo} alt="" /></div>
          <div class="face right"><img className='logoCubic' src={logo} alt="" /></div>
          <div class="face left"><img className='logoCubic' src={logo} alt="" /></div>
          <div class="face top"><img className='logoCubic' src={logo} alt="" /></div>
          <div class="face bottom"><img className='logoCubic' src={logo} alt="" /></div>
        </div>
    </div>

    </div>


  )
}

export default Loader