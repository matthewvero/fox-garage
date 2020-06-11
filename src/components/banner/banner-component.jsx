import React from 'react'
import { BannerContainer, BackgroundFade, BannerTitle, BannerTextContainer, BannerImage, BannerSubtitle, BannerBackground } from './banner.styles'

const Banner = () => {
      return (
            <BannerContainer>
                  <BannerBackground
                        backgroundImage='https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80'
                  />
                  <BackgroundFade/>
                  <BannerTextContainer>
                  <BannerTitle>MOT FOR ALL CUSTOMERS</BannerTitle>
                  <BannerSubtitle>FREE DURING COVID-19</BannerSubtitle>
                  </BannerTextContainer>
                  <BannerImage backgroundImage='https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_66,y_33,w_400,h_400/w_784,h_784,c_fill/auto-client/e6dd6944a9f58f246c0a0d687f6725f7/mot_logo.png'/>
            </BannerContainer>
      )
}

export default Banner
