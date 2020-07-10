import React from 'react'
import { CardHeaderDiv } from './card-header.styles'

const CardHeader = ({children, color, mini}) => {
      return (
            <CardHeaderDiv color={color} mini={mini}>
                  {children}
            </CardHeaderDiv>
      )
}

export default CardHeader
