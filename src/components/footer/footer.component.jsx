import React from 'react'
import { FooterContainer, FooterList, FooterListItem, FooterSection, FooterContactSection, FooterHeader, FooterCopyRightSection } from './footer.styles'
import PhoneNumber from '../misc-components/phone-number/phone-number-component'
import CustomButton from '../custom-button/custom-button.component'

const Footer = () => {
      return (
            <React.Fragment>
            <FooterContainer>
                  <FooterSection>
                        <FooterList>
                              <FooterListItem>Prices</FooterListItem>
                              <FooterListItem>Complete Service</FooterListItem>
                              <FooterListItem>Free Brake Check</FooterListItem>
                              <FooterListItem>Tyre Fitting</FooterListItem>
                              <FooterListItem>Clutch & Gearbox</FooterListItem>
                              <FooterListItem>Steering & Suspension</FooterListItem>

                        </FooterList>
                        <FooterList>
                              <FooterListItem>MOT Test</FooterListItem>
                              <FooterListItem>Standard Service</FooterListItem>
                              <FooterListItem>Air Conditioning</FooterListItem>
                              <FooterListItem>Cambelts</FooterListItem>
                              <FooterListItem>Exhausts</FooterListItem>
                              <FooterListItem>Other Work</FooterListItem>

                        </FooterList>
                        <FooterContactSection>
                              <CustomButton $fontsize='2rem'>Book Now</CustomButton>
                              <PhoneNumber>01276 704600</PhoneNumber>
                        </FooterContactSection>
                  </FooterSection>
            

            <FooterSection>
                        <FooterList>
                              <FooterHeader>FIND US</FooterHeader>
                              <FooterListItem>Fox Garage Services Ltd</FooterListItem>
                              <FooterListItem>3 Doman Road</FooterListItem>
                              <FooterListItem>York Town Business Park</FooterListItem>
                              <FooterListItem>Camberley</FooterListItem>
                              <FooterListItem>Surrey</FooterListItem>
                              <FooterListItem>GU15 3DF</FooterListItem>

                        </FooterList>
                        <FooterList>
                              <FooterHeader>OPENING TIMES</FooterHeader>
                              <FooterListItem><span>Monday:</span> <span>08:00 to 18:00</span></FooterListItem>
                              <FooterListItem><span>Tuesday:</span> <span>08:00 to 18:00</span></FooterListItem>
                              <FooterListItem><span>Wednesday:</span> <span>08:00 to 18:00</span></FooterListItem>
                              <FooterListItem><span>Thursday:</span> <span>08:00 to 18:00</span></FooterListItem>
                              <FooterListItem><span>Friday:</span> <span>08:00 to 18:00</span></FooterListItem>
                              <FooterListItem><span>Saturday:</span> <span>08:00 to 14:00</span></FooterListItem>
                              <FooterListItem><span>Sunday:</span> <span>Closed</span></FooterListItem>
                              

                        </FooterList>
            </FooterSection>
            </FooterContainer>
            <FooterCopyRightSection>Copyright© Fox Garage Services 2015. Garage services covering: Aldershot | Bagshot | Bracknell | Camberley | Crowthorne | Farnborough | Farnham | Woking | Wokingham | Yateley. Privacy Policy</FooterCopyRightSection>
            </React.Fragment>
      )
}

export default Footer
