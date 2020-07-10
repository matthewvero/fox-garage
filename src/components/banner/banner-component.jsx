import React, { createRef }   from 'react'
import { 
      BannerContainer, 
      BackgroundFade, 
      BannerTitle, 
      BannerTextContainer, 
      BannerImage,
      BannerSubtitle, 
      BannerBackground 
}                             from './banner.styles'

class Banner extends React.Component {
      constructor(props) {
            super(props)
            this.myRef = createRef();
      }
      
      state = {
            animate: false

      }

      componentDidMount() {
            window.addEventListener('scroll', () => this.handleScroll(this.myRef), {capture: true,
                  passive: true})
      }

      componentWillUnmount() {
            window.removeEventListener('scroll', () => this.handleScroll(this.myRef), {capture: true,
                  passive: true})
      }

      handleScroll(reference) {
            const elementHeight = reference.current.offsetTop - 500
            const currentState = this.state.animate
            if ( window.pageYOffset > elementHeight && currentState !== true) {
                  this.setState({animate: true}) 
            } else if (window.pageYOffset < elementHeight && currentState !== false){
                  this.setState({animate: false}) 
                  
            } 
                  
            
           
      }

      render(){
            return (
            <BannerContainer ref={this.myRef} animate={this.state.animate} verticle={this.props.verticle}>
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
      )}
}

export default Banner
