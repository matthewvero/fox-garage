import React from 'react'
import WidgetCluster from '../../components/info-widget/widget-cluster/widget-cluster.component'

import InfoPageHeader from '../../components/info-page-header/info-page-header.component'
import { InfoPageHeaderTextContainer, InfoPageTextHeading, InfoPageTextSubHeading, InfoPageTextList, InfoPageTextListItem, InfoPageImageContainer } from '../../components/info-page-header/info-page-header.styles'
import Page from '../page/page.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faOilCan, faSnowflake, faDotCircle, faCogs, faBolt, faCloudMeatball } from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/image/image.component';
import WidgetText from '../../components/info-widget/widget-text/widget-text.component';
import Widget from '../../components/info-widget/widget/widget.component';
import WidgetParagraph from '../../components/info-widget/widget-paragraph/widget-paragraph.component';
import LatestServices from '../../components/latest-services/latest-offers.component';
import { latestOffers, LatestNews } from '../../data/data';

import { AppearHOC } from '../../components/appear-hoc/appear-hoc.component';
import { connect } from 'react-redux';
import NewsCards from '../../components/news-cards/news-cards.component';
import QuickLinks from '../../components/quicklinks/quicklinks-container/quicklinks.component';
import QuickLinksButton from '../../components/quicklinks/quicklinks-button/quicklinks-button.component';
import HoveringBookNowButton from '../../components/book-now-hovering-button/book-now.component';

const MOTPage = ({isMobile, history}) => {
      return (
            <Page>
            
            <HoveringBookNowButton/>
                  <InfoPageHeader>
                        <InfoPageHeaderTextContainer>

                              <InfoPageTextSubHeading>
                                    <span>Fox Garage Camberley</span>
                              </InfoPageTextSubHeading>

                              <InfoPageTextHeading>
                                    <span>MOT</span>
                              </InfoPageTextHeading>

                              <InfoPageTextList>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span> 
                                          Full MOT Services
                                    </InfoPageTextListItem>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span>
                                          VOSA Approved Testers
                                    </InfoPageTextListItem>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span>
                                          Book Your MOT Online
                                    </InfoPageTextListItem>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span>
                                          Competitive MOT Prices
                                    </InfoPageTextListItem>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span>
                                          Free MOT Re-test
                                    </InfoPageTextListItem>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span>
                                          Book Your MOT within 30 Days
                                    </InfoPageTextListItem>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span>
                                          Local Camberley MOT Centre
                                    </InfoPageTextListItem>
                                    <InfoPageTextListItem>
                                          <span>
                                                <FontAwesomeIcon icon={faChevronRight}/>
                                          </span>
                                          BOSCH Service Centre
                                    </InfoPageTextListItem>
                              </InfoPageTextList>
                        </InfoPageHeaderTextContainer>
                        <InfoPageImageContainer>
                              <Image 
                                    $preLoadImage='https://printrat.sirv.com/fox/mot%20page/photo-1429772011165-0c2e054367b8.jpeg?profile=blurred%20preload'
                                    $image='https://printrat.sirv.com/fox/mot%20page/photo-1429772011165-0c2e054367b8.jpeg?w=1500'
                                    $alt='engine parts'
                              />
                        </InfoPageImageContainer>
                  </InfoPageHeader>

                  <WidgetCluster width='95vw'>
                        <Widget>

                              <WidgetText 
                                    $textAlign='start'
                                    $color='DODGERBLUE'
                                    $fontWeight='600'
                              >
                                    WHAT IS THE MOT TEST
                              </WidgetText>

                              <WidgetParagraph 
                                    $color='white'
                                    $textAlign='start'
                              >
                                    The MOT test is a mandatory examination to make sure your vehicle meets the minimum standards to be allowed on the road. 
                                    The Vehicle and Operating Services Agency (VOSA) are responsible for setting these standards and monitoring both the MOT testing station and the MOT tester. 
                                    You’ll need an MOT check once a year. Call us now to book yours.
                                    
                              </WidgetParagraph>
                              <WidgetParagraph 
                                    $color='white'
                                    $textAlign='start'
                              >
                                    You are allowed to have your MOT test carried out and post-dated up to one calendar month in advance of the due date. 
                                    When booking your MOT do bear in mind that the standards are a minimum requirement to allow the vehicle on the road and should 
                                    not be used as a substitute for a scheduled service which comprises a much more comprehensive examination of your vehicle’s operating systems, 
                                    does your car also need a service?
                              </WidgetParagraph>

                              <WidgetText 
                                    $textAlign='start'
                                    $color='DODGERBLUE'
                              >
                                    After 3 Years
                              </WidgetText>

                              <WidgetParagraph 
                                    $color='white'
                                    $textAlign='start'
                              >
                                    Once your vehicle has reached three years of age it will require a MOT test every 12 months. 
                                    It is your responsibility to ensure your vehicle has an up to date MOT certificate. 
                                    It is a legal requirement for your vehicle to be used on the road to have a valid MOT certificate. 
                                    Without a valid MOT certificate you will not be able to renew your tax disc, 
                                    and you may not be covered by your insurance company.
                              </WidgetParagraph>
                              <WidgetText 
                                    $textAlign='start'
                                    $color='DODGERBLUE'
                              >
                                    In Good Hands
                              </WidgetText>

                              <WidgetParagraph 
                                    $color='white'
                                    $textAlign='start'
                              >
                                    All VOSA approved MOT testers have a regular quality check carried out to ensure a consistent professional level of care. 
                                    The MOT assessment is based on the condition of the vehicle on the day it is examined, 
                                    unlike a scheduled service which will assess the vehicles present and future condition up to the next scheduled service. 
                                    Call Fox Garage on 01276704600 to book yours today.
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
                  <WidgetCluster width="100vw">

                        <Widget>
                        <WidgetText $color='dodgerblue' $fontWeight='600'>
                              Quick Links
                        </WidgetText>
                              <QuickLinks>
                              <QuickLinksButton title='EXHAUST' icon={faCloudMeatball} $function={() => history.push('/exhaust')}/>                           
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
      )
}

const mapState = (state) => ({
      isMobile: state.screenSize.isMobile
  })
  export default connect(mapState)(MOTPage) ;

