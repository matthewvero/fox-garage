import React, { useState } from 'react'
import { ImageMain, ImagePreLoad } from './image.styles'

const Image = ({$image, $preLoadImage}) => {
      const [loaded, setLoaded] = useState(false)
      return (
            <React.Fragment>
                  <ImageMain onLoad={() => setLoaded(true)} src={$image}/>
                  <ImagePreLoad src={$preLoadImage} loaded={loaded}/>
            </React.Fragment>
      )
}

export default Image
