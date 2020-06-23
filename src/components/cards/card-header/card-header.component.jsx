import React from 'react'
import { CardHeaderDiv } from './card-header.styles'

const CardHeader = ({children}) => {
      return (
            <CardHeaderDiv>
                  {children}
            </CardHeaderDiv>
      )
}

export default CardHeader
