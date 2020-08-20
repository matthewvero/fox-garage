import React from 'react'
import { CardContainer } from './card.container.styles';

const Card = ({children, $mini, $backgroundImage}) => {
      return (
            <CardContainer $mini={$mini ? 1 : 0} $backgroundImage={$backgroundImage}>
                 {
                       children.map((el, index) => {
                             return React.cloneElement(el, {$mini: $mini ? 1 : 0, key: index})
                       })
                 }
            </CardContainer>
      )
}

export default Card
