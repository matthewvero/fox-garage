import React from 'react'
import { connect } from 'react-redux';
import Page from '../page/page.component';
import {
      InfoPageHeaderTextContainer, 
      InfoPageTextHeading, 
      InfoPageTextSubHeading, 
      InfoPageTextList, 
      InfoPageTextListItem,
      InfoPageImageContainer
} from '../../components/info-page-header/info-page-header.styles';
import InfoPageHeader from '../../components/info-page-header/info-page-header.component';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/image/image.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WidgetCluster from '../../components/info-widget/widget-cluster/widget-cluster.component';
import Widget from '../../components/info-widget/widget/widget.component';
import WidgetText from '../../components/info-widget/widget-text/widget-text.component';
import WidgetParagraph from '../../components/info-widget/widget-paragraph/widget-paragraph.component';
import LatestServices from '../../components/latest-services/latest-offers.component';
import { latestOffers } from '../../data/data';
import HoveringBookNowButton from '../../components/book-now-hovering-button/book-now.component';


const AirconPage = ({isMobile, history}) => {
      return (
            <Page>
            <HoveringBookNowButton/>
            <InfoPageHeader>
                  <InfoPageHeaderTextContainer $color='#666666'>

                        <InfoPageTextSubHeading>
                              <span>Fox Garage Camberley</span>
                        </InfoPageTextSubHeading>

                        <InfoPageTextHeading>
                              <span>Air Conditioning</span>
                        </InfoPageTextHeading>

                        <InfoPageTextList>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span> 
                                    Air Con Recharge from £49.00

                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Great deals with Servicing
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Leak Detection Servcice
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Fully Trained Staff
                              </InfoPageTextListItem>
                              
                        </InfoPageTextList>
                  </InfoPageHeaderTextContainer>
                  <InfoPageImageContainer>
                        <Image
                        $image="https://printrat.sirv.com/fox/mot%20page/photo-1525490829609-d166ddb58678-2.jpeg?w=1000"
                        $preLoadImage='https://printrat.sirv.com/fox/mot%20page/photo-1525490829609-d166ddb58678-2.jpeg?profile=blurred%20preload'
                        />
                  </InfoPageImageContainer>
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start'}}>
                        
                        <WidgetText
                              $textAlign='start'
                              $color='DODGERBLUE'
                              $fontWeight='600'
                              
                        >
                              Air-Con Recharge £59.00
                        </WidgetText>
         
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              Your air conditioning system needs to be recharged approximately once every two years. 
                              During this recharge, we top-up the fluid that runs through the system to keep your air-con nice and cool. 
                              We offer an conditioning recharge for just £59.00 – much cheaper than most of our competitors!
                        </WidgetParagraph>

                        <WidgetText
                              $textAlign='start'
                              $color='DODGERBLUE'
                        >
                              AIR-CON LEAKS
                        </WidgetText>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     

                              Your vehicles system may not recharge correctly due to a leak,
                              if this is the case then our fully trained technicians* can carry out a leak detection test, 
                              if the leak is not immediately obvious, 
                              to diagnose the fault with your air conditioning system and our dedicated service team will then be able
                              to provide you with a quote for repair.
                        </WidgetParagraph>

                        <WidgetText
                              $textAlign='start'
                              $color='DODGERBLUE'
                        >
                              AIR-CON SERVICING
                        </WidgetText>


                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >

                              If your air conditioning system is operating correctly but produces a mouldy or damp smell then your vehicle requires an air 
                              conditioning service which includes an anti-bacterial treatment, a change of pollen filter and a system inspection and recharge. 
                              This will kill off the bacteria building up within you air conditioning system and freshen your vehicle. 
                              Fox Garage Services offers this for the cost of just £79.00.
                        
                        </WidgetParagraph>

                        <WidgetText
                              $textAlign='start'
                              $color='DODGERBLUE'
                        >
                              AIR-CON CLEAN
                        </WidgetText>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              Air-con started to smell? Our air-con clean flushes out bacteria and leaves your car smelling fresh.


                        </WidgetParagraph>

                  </Widget>
                  
                  <Widget>
                        <LatestServices $items={latestOffers}/>
                  </Widget>

            </WidgetCluster>

      </Page>
      )
}

const mapState = (state) => ({
      isMobile: state.screenSize.isMobile
  })
export default connect(mapState)(AirconPage) ;
