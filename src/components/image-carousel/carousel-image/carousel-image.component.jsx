import React, { useState } from 'react'
import { CarouselImageContainer } from './carousel-image.styles'
import { CSSTransition } from 'react-transition-group'

const CarouselImage = ({$preLoadImage, $image}) => {
      const [imageLoaded, setImageLoaded] = useState(false)
      return (
            <React.Fragment>
                  <CSSTransition
                        in={imageLoaded === false ? true : false}
                        timeout={400}
                        classNames='preLoadImage'
                        unmountOnExit
                  >
                        <CarouselImageContainer preload src={$preLoadImage} />
                  </CSSTransition>
                  <CarouselImageContainer src={$image} onLoad={() => {
                        setImageLoaded(true)
                        console.log('loaded')
                  }}/>
            </React.Fragment>
            
            
      )
}

export default CarouselImage
