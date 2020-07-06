import React from 'react'
import { CardHeaderDiv } from './card-header.styles'

const CardHeader = ({children, color}) => {
      return (
            <CardHeaderDiv color={color}>
                  {children}
            </CardHeaderDiv>
      )
}

export default CardHeader
