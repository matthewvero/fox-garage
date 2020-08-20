import React from 'react'
import { CardTextDiv } from './card-text.styles'

const CardText = ({children, $mini}) => {
      return (
            <CardTextDiv mini={$mini}>
                  {children}
            </CardTextDiv>
      )
}

export default CardText
