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

class Banner extends React.Component {


      render(){
            return (
            <BannerContainer >
                  <Image
                        $image='https://printrat.sirv.com/fox/foximages/photo-1471174617910-3e9c04f58ff5.jpeg'
                        $alt='background image of car interior'
                        $imageSize='50%'
                  />
                  <BackgroundFade/>
                  <BannerTextContainer>
                        <BannerTitle>MOT FOR ALL CUSTOMERS</BannerTitle>
                        <BannerSubtitle>FREE DURING COVID-19</BannerSubtitle>
                  </BannerTextContainer>
                  <BannerImage backgroundImage='https://printrat.sirv.com/fox/fox/mot_logo.png?w=20%25&h=20%25' alt='MOT symbol'/>
            </BannerContainer>
      )}
}

export default Banner
