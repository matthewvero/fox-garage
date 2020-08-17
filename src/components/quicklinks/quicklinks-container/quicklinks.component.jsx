import React from 'react'
import { QuickLinksContainer }  from './quicklinks.styles'



const QuickLinks = ({children}) => {
      return (
            
                  <QuickLinksContainer >
                        {children}
                  </QuickLinksContainer>
      
      )
}

export default QuickLinks
