import React from 'react'
import { WidgetTextContainer, WidgetTextContent } from './widget-text.styles'

const WidgetText = ({children, ...otherprops}) => {
      return (
            <WidgetTextContainer>
                  <WidgetTextContent {...otherprops}>
                        {children}
                  </WidgetTextContent>
            </WidgetTextContainer>
      )
}

export default WidgetText
