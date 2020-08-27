import React, { useState, useRef, useEffect } from 'react'
import { ImageMain, ImagePreLoad } from './image.styles'

const Image = ({$image, $alt, $imageSize = '75%'}) => {
      const [loaded, setLoaded] = useState(false)
      const myRef = useRef(null)
      const [width, setWidth] = useState(0)
      const [height, setHeight] = useState(0)
      useEffect(() => {
            setHeight(myRef.current.offsetHeight);
            setWidth(myRef.current.offsetWidth);
      }, [$image, height, width])
      return (
            
            <React.Fragment>
                  <ImageMain 
                        onLoad={() => setLoaded(true)} 
                        alt={$alt} 
                        src={`${$image}?cx=center&cy=center&cw=${width}&ch=${height}&w=${$imageSize}25`}
                  />
                  <ImagePreLoad 
                        ref={myRef} 
                        src={`${$image}?cw=${width}&ch=${height}&blur=15&w=5%25`} 
                        alt={$alt} 
                        loaded={loaded}
                  />
            </React.Fragment>
      )
}

export default Image
