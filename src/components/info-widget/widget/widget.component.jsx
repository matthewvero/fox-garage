import React from 'react'
import { SectionContainer } from './widget.styles'

const Widget = ({children, ...otherprops}) => {
      return (
            <SectionContainer {...otherprops} >
                  {children}
            </SectionContainer>
      )
}

export default Widget
