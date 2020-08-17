import React from 'react'

import {QuickLinksButtonContainer, QuickLinkIcon, QuickLinkTitle} from './quicklinks-button.styles'

const QuickLinksButton = ({title, icon, $function}) => {
      return (
            <QuickLinksButtonContainer onClick={$function}>
                  <QuickLinkTitle>{title}</QuickLinkTitle>
                  <QuickLinkIcon icon={icon}/>
            </QuickLinksButtonContainer>
      )
}

export default QuickLinksButton
