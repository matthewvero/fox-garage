import React from 'react'
import { CardIconElement } from './card-icon.styles'

const CardIcon = ({icon, $mini}) => {
      return (
            <CardIconElement icon={icon} mini={$mini}/>
      )
}

export default CardIcon
