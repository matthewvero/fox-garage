import React from 'react'
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
import {faChevronRight, faOilCan, faSnowflake, faDotCircle, faCogs, faBolt, faListAlt} from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/image/image.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WidgetCluster from '../../components/info-widget/widget-cluster/widget-cluster.component';
import Widget from '../../components/info-widget/widget/widget.component';
import WidgetText from '../../components/info-widget/widget-text/widget-text.component';
import WidgetParagraph from '../../components/info-widget/widget-paragraph/widget-paragraph.component';
import LatestServices from '../../components/latest-services/latest-offers.component';
import { latestOffers, LatestNews } from '../../data/data';
import { AppearHOC } from '../../components/appear-hoc/appear-hoc.component';
import QuickLinks from '../../components/quicklinks/quicklinks-container/quicklinks.component';
import QuickLinksButton from '../../components/quicklinks/quicklinks-button/quicklinks-button.component';
import NewsCards from '../../components/news-cards/news-cards.component';
import HoveringBookNowButton from '../../components/book-now-hovering-button/book-now.component';

const BrakeCheckPage = ({history, isMobile}) => {
      return (
            <div>
            <Page>
            <HoveringBookNowButton/>
            <InfoPageHeader>
                  <InfoPageHeaderTextContainer>

                        <InfoPageTextSubHeading>
                              <span>Fox Garage Camberley</span>
                        </InfoPageTextSubHeading>

                        <InfoPageTextHeading>
                              <span>Free Brake Check</span>
                        </InfoPageTextHeading>

                        <InfoPageTextList>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Brake Replacement
                              </InfoPageTextListItem>
                        
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Disc and Drum Brakes
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Sensor Replacement
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Free Inspection
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    All Manufacturers
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Brake Fluid Checks
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Brake Fluid Changes
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Handbrake Adjustment
                              </InfoPageTextListItem>
                              
                        </InfoPageTextList>
                  </InfoPageHeaderTextContainer>
                  <InfoPageImageContainer>
                        <Image
                              $image="https://printrat.sirv.com/fox/photo-1578148211838-491f3014dfc8.jpeg?cy=500&ch=1000"
                              $preLoadImage='https://printrat.sirv.com/fox/photo-1578148211838-491f3014dfc8.jpeg?cy=50&ch=100&blur=15&h=200'
                              $alt='Image of a wheel'
                        />
                  </InfoPageImageContainer>
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start', marginTop: '20px'}}>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              Your braking system is essential to keeping you and other road users safe. Regular inspection and maintenance is therefore highly recommended. 
                              If you have anyconcerns about the efficiency of you braking system or you hear any grinding or metallic noises, 
                              please do not hesitate to book a <span style={{fontWeight: '600', color: 'dodgerblue'}}>free brake inspection.</span>
                              We will provide you with a braking inspection report and quote you for the repair with no obligation to have the work completed.

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              <span style={{fontWeight: '600', color: 'dodgerblue'}}>All braking systems</span> comprise similar components including a master cylinder, brake servo, brake calipers, brake fluid and cylinders, discs, drums, brake pads or brake shoes. The brake system operates through a series of hoses and brake pipes (or linings) containing brake fluid.
                              All of these components are subject to wear and tear and need to be inspected at least 
                              annually as part of the inspections carried out during servicing.

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              Our qualified technicians carry out brake system inspections during every service inspection looking for excessive wear 
                              to brake pads and discs or drums and also testing the brake fluid. During MOT Tests the performance of your vehicle’s
                              braking system is tested on a rolling road to measure the amount of braking force generated while operating the hand and foot brakes. The braking forcegenerated is then recorded and must pass a minimum efficiency standard. 
                              Any reading or imbalance falling outside these tolerance levels will result in an <span style={{fontWeight: '600', color: 'dodgerblue'}}>MOT test failure.</span>

                        </WidgetParagraph>

                  </Widget>
                  
                  <Widget>
                        <LatestServices $items={latestOffers}/>
                  </Widget>

            </WidgetCluster>

            <AppearHOC isMobile={isMobile}>
                  
            <NewsCards $items={LatestNews}/>

            </AppearHOC>
            <AppearHOC>
            <WidgetCluster width="90vw">

                  <Widget>
                  <WidgetText $color='dodgerblue' $fontWeight='600'>
                        Quick Links
                  </WidgetText>
                        <QuickLinks>
                              <QuickLinksButton title='MOT' icon={faListAlt} $function={() => history.push('/mot')}/>                              
                              <QuickLinksButton title='SERVICE' icon={faOilCan} $function={() => history.push('/completeservice')}/>
                              <QuickLinksButton title='AIRCON' icon={faSnowflake} $function={() => history.push('/aircon')}/>
                              <QuickLinksButton title='TYRE FITTING' icon={faDotCircle} $function={() => history.push('/tyrefitting')}/>
                              <QuickLinksButton title='CAMBELTS' icon={faCogs} $function={() => history.push('/cambelts')}/>
                              <QuickLinksButton title='EV' icon={faBolt} $function={() => history.push('/hybridandev')}/>

                        </QuickLinks>
                  </Widget>
            </WidgetCluster>
            </AppearHOC>

      </Page>
            </div>
      )
}

export default BrakeCheckPage
