import React, { useState, useEffect } from 'react';
import rocket from './este.gif';
import rocket1 from './rocket1.svg';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isRocket1, setIsRocket1] = useState(false);

  const toggleRocketAnimation = () => {
    setIsRocket1(!isRocket1);
    setTimeout(scrollToTop, 400)
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si estamos en la parte superior de la página
      if (window.scrollY === 0) {
        setIsRocket1(false);
      }
    };

    // Agregar un event listener para el evento scroll
    window.addEventListener('scroll', handleScroll);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='scrollContainer'>
      <img
        onClick={toggleRocketAnimation}
        style={{ width: 100, cursor: 'pointer' }}
        src={isRocket1 ? rocket : rocket1}
        alt="Rocket"
      />
    </div>
  );
};

export default ScrollToTop;
