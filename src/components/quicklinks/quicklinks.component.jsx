import React from 'react'
import { QuickLinksButton,  QuickLinksContainer, QuickLinkTitle, QuickLinkIcon} from './quicklinks.styles'

import { faListAlt, faOilCan, faSnowflake, faDotCircle, faCogs, faBolt } from "@fortawesome/free-solid-svg-icons";

const QuickLinks = () => {
      return (
            
                  <QuickLinksContainer>
                        <QuickLinksButton>
                              <QuickLinkTitle>MOT</QuickLinkTitle>   
                              <QuickLinkIcon icon={faListAlt}/>     
                        </QuickLinksButton>
                        <QuickLinksButton>
                              <QuickLinkTitle>SERVICE</QuickLinkTitle>  
                              <QuickLinkIcon icon={faOilCan}/>      
                        </QuickLinksButton>
                        <QuickLinksButton>
                              <QuickLinkTitle>AIRCON</QuickLinkTitle>  
                              <QuickLinkIcon icon={faSnowflake}/>      
                        </QuickLinksButton>
                        <QuickLinksButton>
                              <QuickLinkTitle>TYRE FITTING</QuickLinkTitle>     
                              <QuickLinkIcon icon={faDotCircle}/>   
                        </QuickLinksButton>
                        <QuickLinksButton>
                              <QuickLinkTitle>CAMBELTS</QuickLinkTitle>   
                              <QuickLinkIcon icon={faCogs}/>     
                        </QuickLinksButton>
                        <QuickLinksButton>
                              <QuickLinkTitle>EV</QuickLinkTitle>  
                              <QuickLinkIcon icon={faBolt}/>  
                        </QuickLinksButton>
                  </QuickLinksContainer>
      
      )
}

export default QuickLinks
