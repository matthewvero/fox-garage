import React from 'react'
import { CardsWidgetcontainer } from './cards-widget.styles';

const CardsContainerWidget = ({children}) => {
      return (
            <CardsWidgetcontainer>
                  {children}
            </CardsWidgetcontainer>
      )
}

export default CardsContainerWidget
