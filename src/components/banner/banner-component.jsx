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
                        $image='https://printrat.sirv.com/fox/homepagecarousel/photo-1471174617910-3e9c04f58ff5.jpeg?cy=1000&ch=500'
                        $preLoadImage='https://printrat.sirv.com/fox/homepagecarousel/photo-1471174617910-3e9c04f58ff5.jpeg?cy=80&ch=50&blur=15&h=200'
                  />
                  <BackgroundFade/>
                  <BannerTextContainer>
                        <BannerTitle>MOT FOR ALL CUSTOMERS</BannerTitle>
                        <BannerSubtitle>FREE DURING COVID-19</BannerSubtitle>
                  </BannerTextContainer>
                  <BannerImage backgroundImage='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_66,y_33,w_400,h_400/w_784,h_784,c_fill/auto-client/e6dd6944a9f58f246c0a0d687f6725f7/mot_logo.png'/>
            </BannerContainer>
      )}
}

export default Banner
