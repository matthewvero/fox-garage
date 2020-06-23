import React from 'react'
import { CardTextDiv } from './card-text.styles'

const CardText = ({children}) => {
      return (
            <CardTextDiv>
                  {children}
            </CardTextDiv>
      )
}

export default CardText
