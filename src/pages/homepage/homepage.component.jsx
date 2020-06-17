import React from 'react'
import { HomepageContainer } from './homepage.styles'
import WidgetCluster from '../../components/info-widget/widget-cluster/widget-cluster.component'
import Widget from '../../components/info-widget/widget/widget.component'
import PhoneNumber from '../../components/misc-components/phone-number/phone-number-component'
import CustomButton from '../../components/custom-button/custom-button.component'
import WidgetText from '../../components/info-widget/widget-text/widget-text.component'
import Banner from '../../components/banner/banner-component'
import WidgetParagraph from '../../components/widget-paragraph/widget-paragraph.component'
import Logo from '../../components/misc-components/logo/logo.component'
import QuickLinks from '../../components/quicklinks/quicklinks.component'
const Homepage = () => {
      return (
            <HomepageContainer>

                 
                  <WidgetCluster>
                        <Widget 
                              backgroundcolor='#8899aa' 
                              color='white'
                              otherStyles='
                                    text-align: left;     
                              '
                        > 
                              <WidgetText>
                                    BOSCH ACCREDITED AND RAC APPROVED SERVICING
                              </WidgetText>
                        </Widget>
                        <Widget backgroundcolor='white'>
                              <WidgetText color='#8899aa' textSize='heading' >Call Us To Book </WidgetText>
                              <PhoneNumber/>
                              <CustomButton> Our Prices</CustomButton>
                        </Widget>
                        <Widget large warning>
                              <WidgetText textSize='heading'>
                                    COVID-19 - WE'RE OPEN
                              </WidgetText>
                              <WidgetText textSize='subtext'>
                                    During this difficult time Fox Garage Camberley is committed to keeping our roads safe. 
                                    So for a limited time MOT's are FREE to all customers and our service packages start from £59.00. 
                                    We will also pickup and return your vehicle with our no-contact service.
                              </WidgetText>
                        </Widget>
                  </WidgetCluster>

                  <WidgetCluster>
                  <Widget>
                  
                  </Widget>
                  <Widget>
                        <QuickLinks></QuickLinks>
                  </Widget>
            </WidgetCluster>


                  <Banner/>

                  <WidgetCluster width='wide'>
                        <Widget></Widget>

                        <Widget>
                              <Logo alignment='start'/>
                              <WidgetParagraph textSize='subtext'>
                                    Based in Camberley on the borders of three counties (Surrey, Hampshire and Berkshire) we are an independent service garage with Bosch and RAC accreditation. We provide a professional service, from your first call through until your vehicles return.
                                    Fox Garage Services Ltd carry out Services, MOTs and a range of repairs on all makes and models of car, using quality parts we deliver great customer service at competitive rates and our twelve month or 12,000 mile guarantee ensures you have the cover and peace of mind that you need.
                                    Our service team will be happy to provide quotes for services or repairs and make a booking for you, by phone on 01276 704600, or through the online booking facility.
                              </WidgetParagraph>
                        
                        </Widget>
                  
                  </WidgetCluster>
            
            </HomepageContainer>
      )
}

export default Homepage
