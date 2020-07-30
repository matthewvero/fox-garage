import React from 'react'
import {CardSectionContainer} from './card-section.styles';

const CardSection = ({children, row}) => {
      return (
            <CardSectionContainer row={row}>
                  {children}
            </CardSectionContainer>
      )
}

export default CardSection
