import React from 'react'
import { 
      BannerContainer, 
      BackgroundFade, 
      BannerTitle, 
      BannerTextContainer, 
      BannerImage,
      BannerSubtitle,  
} from './banner.styles'
import Image from '../image/image.component';
import { withRouter } from 'react-router';

const Banner = ({$image, $alt, $imageSize, $path, history, $bannerImage, $bannerImageAlt}) => {

      return (
            <BannerContainer onClick={() => history.push($path)}>
                  <Image
                        $image={$image}
                        $alt={$alt}
                        $imageSize={$imageSize}
                  />
                  <BackgroundFade/>
                  <BannerTextContainer>
                        <BannerTitle>MOT FOR ALL CUSTOMERS</BannerTitle>
                        <BannerSubtitle>FREE DURING COVID-19</BannerSubtitle>
                  </BannerTextContainer>
                  {$bannerImage && 
                        <BannerImage backgroundImage={$bannerImage} alt={$bannerImageAlt}/>
                  }
            </BannerContainer>
      )
}

export default withRouter(Banner)
