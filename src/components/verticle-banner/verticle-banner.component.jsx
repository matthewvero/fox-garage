import React from 'react'
import { VerticleBannerContainer, VerticleBannerHeading, VerticleBannerFader } from './verticle-banner.styles'

const VerticleBanner = ({backgroundImage, children}) => {
      return (
            <VerticleBannerContainer backgroundImage={backgroundImage}>
                  <VerticleBannerFader/>
                  {children}
            </VerticleBannerContainer>
      )
}

export default VerticleBanner
