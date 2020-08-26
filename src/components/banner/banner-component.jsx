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
                        $image='https://printrat.sirv.com/fox/fox/photo-1471174617910-3e9c04f58ff5-min.jpeg?cx=20%25&cy=30%25&cw=75%25&ch=30%25&w=75%25'
                        $preLoadImage='https://printrat.sirv.com/fox/fox/photo-1471174617910-3e9c04f58ff5-min.jpeg?profile=blurred%20preload&cx=20%25&cy=30%25&cw=75%25&ch=30%25'
                        $alt='background image of car interior'
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
