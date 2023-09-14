import React from 'react'
import logo from '../../assets/logo.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import line from '../../assets/line.png'
import './Footer.css'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#393939', bottom:0}}>
        <div style={{display:'flex', alignItems:'center', marginLeft: 40}}>
            <img className='logo' src={logo} alt='logo' style={{marginTop:40}}/>
            <div style={{display:'flex', flexDirection:'column', marginLeft:15, marginTop:40}}>
                <p style={{fontSize:26}}>Generación</p>
                <strong style={{color: '#00ccc4', fontSize:26}}>Tech</strong>
            </div>
        </div>

        <div className='sectionSocialMedia'>
            <LinkedInIcon sx={{fontSize:40}}/> 
                {/* <hr className='hrFooter' /> */}
                <img className='line' src={line} alt="" />
            <TwitterIcon sx={{fontSize:40}}/>

            {/* <hr className='hrFooter' /> */}
            <img className='line' src={line} alt="" />

             <InstagramIcon sx={{fontSize:40}}/>
             
        </div>

        <div className='secTerminos'>
            <p>Acuerdos Legales</p>
            <FiberManualRecordIcon sx={{fontSize:7}}/>
            <p>Terminos y Condiciones</p>
            <FiberManualRecordIcon sx={{fontSize:7}}/>
            <p>Privacidad</p>
        </div>


    </div>
  )
}

export default Footer