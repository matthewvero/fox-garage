import React from 'react'
import { VerticleBannerContainer, VerticleBannerFader } from './verticle-banner.styles'
import Image from '../image/image.component'

const VerticleBanner = ({$image, $imageSize, children}) => {


      return (
            <VerticleBannerContainer >
                  <Image 
                        $image={$image}
                        $imageSize={$imageSize}
                  />
                  <VerticleBannerFader/>
                  {children}
            </VerticleBannerContainer>
      )
}


export default VerticleBanner
