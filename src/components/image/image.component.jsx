import React, { useState, useRef, useEffect } from 'react'
import { ImageMain, ImagePreLoad } from './image.styles'

const Image = ({$image, $alt, $imageSize = '75%'}) => {
      const [loaded, setLoaded] = useState(false);
      const myRef = useRef(null);
      const [width, setWidth] = useState(0);
      const [height, setHeight] = useState(0);

      useEffect(() => {
            setHeight(myRef.current.offsetHeight);
              setWidth(myRef.current.offsetWidth);
      }, [height, width])


      const resizeListener = debounce(() => {
            setHeight(myRef.current.offsetHeight);
            setWidth(myRef.current.offsetWidth);
            console.log('resized')
      }, 250)
  
      useEffect(() => {
          window.addEventListener("resize", resizeListener, {passive: true});
          return () => {
              window.removeEventListener("resize", resizeListener);
          };
      });



  
      

      return (
            
            <React.Fragment>
                  <ImageMain 
                        onLoad={() => setLoaded(true)} 
                        alt={$alt} 
                        src={`${$image}?cx=center&cy=center&cw=${width}&ch=${height}&w=${$imageSize}25`}
                  />
                  <ImagePreLoad 
                        ref={myRef} 
                        src={`${$image}?cx=center&cy=center&cw=${width}&ch=${height}&w=10%25&blur=20`} 
                        alt={$alt} 
                        loaded={loaded}
                  />
            </React.Fragment>
      )
}

const debounce = (func, wait) => {
      let timeout;
    
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
    
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
};
export default Image
