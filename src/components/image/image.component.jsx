import React, { useState, useRef, useEffect } from 'react'
import { ImageMain, ImagePreLoad } from './image.styles'

const Image = ({$image, $alt}) => {
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
                        src={`${$image}?cy=center&ch=${height}&w=${width}`}
                  />
                  <ImagePreLoad 
                        ref={myRef} 
                        src={`${$image}?cy=center&ch=${height}&blur=15&w=${Math.floor(width / 10)}`} 
                        alt={$alt} 
                        loaded={loaded}
                  />
            </React.Fragment>
      )
}

export default Image
