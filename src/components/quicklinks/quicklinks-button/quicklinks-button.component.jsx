import React from 'react'

import {QuickLinksButtonContainer, QuickLinkIcon, QuickLinkTitle} from './quicklinks-button.styles'

const QuickLinksButton = ({title, icon}) => {
      return (
            <QuickLinksButtonContainer>
                  <QuickLinkTitle>{title}</QuickLinkTitle>
                  <QuickLinkIcon icon={icon}/>
            </QuickLinksButtonContainer>
      )
}

export default QuickLinksButton
