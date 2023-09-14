import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Servicios.css'


const Servicios = () => {
  return (
    <div id='servicios'>
        <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>SERVICIOS</p>
     
        <div className='cardsServicios'>
            <div className="cardServicio" id='dw'>
                <p className='tituloCard'>DESARROLLO WEB</p>
                <hr />

                <li className='li'>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Hosting gratuito</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Diseño responsive</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Dominio personalizado</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Panel administrador</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Base de datos/servidor</p>
                    </div>
                    
                </li>
            </div>
            
            <div className="cardServicio" id='uxui'>
                <p className='tituloCard'>DISEÑO UX/UI</p>
                <hr />

                <li className='li'>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Hosting gratuito</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Diseño responsive</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Dominio personalizado</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Panel administrador</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Base de datos/servidor</p>
                    </div>
                    
                </li>
            </div>
            <div className="cardServicio" id='cm'>
                <p className='tituloCard'>COMMUNITY <br/> MANAGER</p>
                <hr />

                <li className='li'>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon className='iconNegro' sx={{fontSize:40}}/>
                        <p style={{marginLeft: 5}}> Hosting gratuito</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                        <p style={{marginLeft: 5}}> Diseño responsive</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                        <p style={{marginLeft: 5}}> Dominio personalizado</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                        <p style={{marginLeft: 5}}> Panel administrador</p>
                    </div>
                    <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                        <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                        <p style={{marginLeft: 5}}> Base de datos/servidor</p>
                    </div>
                    
                </li>
            </div>
        </div>
    </div>
  )
}

export default Servicios