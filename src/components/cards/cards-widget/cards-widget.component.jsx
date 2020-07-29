import React from 'react'
import { CardsWidgetcontainer } from './cards-widget.styles';

const CardsContainerWidget = ({children, mini, grid}) => {
      return (
            <CardsWidgetcontainer grid={grid} mini={mini}>
            {
                  children.map((el, index) => {
                        return React.cloneElement(el, {mini: mini ? 1 : 0, key: index})
                  })
            }
            </CardsWidgetcontainer>
      )
}

export default CardsContainerWidget
