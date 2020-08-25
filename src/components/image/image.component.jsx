import React, { useState } from 'react'
import { ImageMain, ImagePreLoad } from './image.styles'

const Image = ({$image, $preLoadImage, $alt}) => {
      const [loaded, setLoaded] = useState(false)
      return (
            <React.Fragment>
                  <ImageMain onLoad={() => setLoaded(true)} alt={$alt} src={$image}/>
                  <ImagePreLoad src={$preLoadImage} alt={$alt} loaded={loaded}/>
            </React.Fragment>
      )
}

export default Image
