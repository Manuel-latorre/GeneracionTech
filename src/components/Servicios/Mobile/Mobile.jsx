import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import styles from  './Mobile.module.css';

export default function App() {
  return (
    <div id='servicios' className={styles.mobileServicos}>
        <div>
        <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>SERVICIOS</p>
        </div>
      <Swiper
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       slideActiveClass='activeSlide'
       slideNextClass='nextClass'
       slidePrevClass='prevClass'
       autoplay={{
           delay: 2000,
           disableOnInteraction: false,
         }}
       coverflowEffect={{
         rotate:0,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.sliderMobile}>
        <div className={styles.cardServicio} id='dw'>
                  <p className='tituloCard'>DESARROLLO WEB</p>
                  <hr />
                  <li className={styles.li}>
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
        </SwiperSlide>
        <SwiperSlide className={styles.sliderMobile}>
        <div className={styles.cardServicio} id='uxui'>
                 <p className='tituloCard'>DISEÑO UX/UI</p>
                 <hr />
                 <li className={styles.li}>
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
        </SwiperSlide>
        <SwiperSlide className={styles.sliderMobile}>
        <div className={styles.cardServicio} id='cm'>
                 <p className='tituloCard'>COMMUNITY <br/> MANAGER</p>
                 <hr />
                 <li className={styles.li}>
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
        </SwiperSlide>
        <SwiperSlide className={styles.sliderMobile}>
        <div className={styles.cardServicio} id='dw'>
                  <p className='tituloCard'>DESARROLLO WEB</p>
                  <hr />
                  <li className={styles.li}>
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
        </SwiperSlide>
        <SwiperSlide className={styles.sliderMobile}>
        <div className={styles.cardServicio} id='uxui'>
                 <p className='tituloCard'>DISEÑO UX/UI</p>
                 <hr />
                 <li className={styles.li}>
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
        </SwiperSlide>
        <SwiperSlide className={styles.sliderMobile}>
        <div className={styles.cardServicio} id='cm'>
                 <p className='tituloCard'>COMMUNITY <br/> MANAGER</p>
                 <hr />
                 <li className={styles.li}>
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
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
}
