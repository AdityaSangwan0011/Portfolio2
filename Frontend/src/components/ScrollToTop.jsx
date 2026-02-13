import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
   };

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <>
         {isVisible && (
            <button className='scroll-to-top' onClick={scrollToTop}>
               <i className='ri-arrow-up-line'></i>
            </button>
         )}
      </>
   );
};

export default ScrollToTop;
