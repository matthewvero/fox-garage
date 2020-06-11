import React from 'react'
import { WidgetParagraphContainer, WidgetParagraphContent } from './widget-paragraph.styles'

const WidgetParagraph = ({children, ...otherprops}) => {
      return (
            <WidgetParagraphContainer>
                  <WidgetParagraphContent {...otherprops}>
                        {children}
                  </WidgetParagraphContent>
            </WidgetParagraphContainer>
      )
}

export default WidgetParagraph