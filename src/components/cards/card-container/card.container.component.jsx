import React from 'react'
import { CardContainer } from './card.container.styles';

const Card = ({children}) => {
      return (
            <CardContainer>
                 {children}
            </CardContainer>
      )
}

export default Card
