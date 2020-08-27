import React from 'react'
import { ServicesContainer, ServiceTileContainer, ServiceTileTitle, ServiceTileBackgroundFader, ServiceTileButton } from './services.styles'
import { connect } from 'react-redux'
import Image from '../image/image.component'

const Services = ({engineSize, data, tileColor}) => {
      return (
            <ServicesContainer>
            <ServiceTileContainer $backgroundColor={tileColor}>
                  <ServiceTileTitle >{data.title}</ServiceTileTitle>
            </ServiceTileContainer>
                  {
                        data.services.map (el => {
                              return (
                                    <ServiceTileContainer $titleBlock>
                                          <Image
                                                $image={el.image}
                                                $alt='generic background image'
                                                $imageSize='50%'

                                          />
                                          <ServiceTileBackgroundFader/>
                                          <ServiceTileTitle>{el.title}</ServiceTileTitle>
                                          <ServiceTileButton><span>Book Now</span><span>{el.prices[engineSize]}</span></ServiceTileButton>
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
