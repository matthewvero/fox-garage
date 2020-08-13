import React from 'react'
import { ServicesContainer, ServiceTileContainer, ServiceTileTitle, ServiceTileBackgroundFader } from './services.styles'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'


const Services = ({engineSize, data, tileColor}) => {
      return (
            <ServicesContainer>
            <ServiceTileContainer $backgroundColor={tileColor}>
                  <ServiceTileTitle >{data.title}</ServiceTileTitle>
            </ServiceTileContainer>
                  {
                        data.services.map (el => {
                              return (
                                    <ServiceTileContainer $backgroundImage={el.backgroundImage}>
                                          <ServiceTileBackgroundFader/>
                                          <ServiceTileTitle>{el.title}</ServiceTileTitle>
                                          <CustomButton $fontsize='1.2vw'><span>Book Now</span><span>{el.prices[engineSize]}</span></CustomButton>
                                    </ServiceTileContainer>
                              )
                        })
                        
                  }                  
            </ServicesContainer>
      )
}
//<ServiceTileTitle>{el.prices[engineSize]}</ServiceTileTitle>
const mapProps = state => ({
      engineSize: state.engineSelector.selectedEngine
})

export default connect(mapProps)(Services);
