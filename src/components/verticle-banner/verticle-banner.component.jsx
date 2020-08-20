import React from 'react'
import { VerticleBannerContainer, VerticleBannerFader } from './verticle-banner.styles'
import Image from '../image/image.component'

const VerticleBanner = ({$image, $preLoadImage, children}) => {


      return (
            <VerticleBannerContainer >
                  <Image 
                        $image={$image}
                        $preLoadImage={$preLoadImage}
                  />
                  <VerticleBannerFader/>
                  {children}
            </VerticleBannerContainer>
      )
}


export default VerticleBanner
