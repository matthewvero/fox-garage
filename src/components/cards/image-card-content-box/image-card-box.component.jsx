import React from 'react'
import { ImageContentBoxContainer } from './image-card.styles'

const ImageCardContentBox = ({children, topColor}) => {
      return (
            <ImageContentBoxContainer topColor={topColor}>
                  {children}
            </ImageContentBoxContainer>
      )
}

export default ImageCardContentBox
