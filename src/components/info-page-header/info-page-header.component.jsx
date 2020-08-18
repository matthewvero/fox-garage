import React from 'react'
import {InfoPageHeaderContainer} from './info-page-header.styles';
const InfoPageHeader = ({children}) => {
      return (
            <InfoPageHeaderContainer>
                  {children}
            </InfoPageHeaderContainer>
      )
}

export default InfoPageHeader
