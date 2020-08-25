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
import {faChevronRight, faCloudMeatball, faOilCan, faSnowflake, faDotCircle, faCogs, faBolt} from '@fortawesome/free-solid-svg-icons';
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

const SteeringAndSuspensionPage = ({history, isMobile}) => {
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
                              <span>Steering And Suspension</span>
                        </InfoPageTextHeading>

                        <InfoPageTextList>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Fox Garage Services Warranty
                              </InfoPageTextListItem>
                        
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Competitive Pricing

                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Fully Trained Technicians
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Bosch Approved
                              </InfoPageTextListItem>
                              
                              
                        </InfoPageTextList>
                  </InfoPageHeaderTextContainer>
                  <InfoPageImageContainer>
                        <Image
                              $image="https://printrat.sirv.com/fox/photo-1542377281-73d08e3a10aa.jpeg"
                              $preLoadImage='https://printrat.sirv.com/fox/photo-1542377281-73d08e3a10aa.jpeg?profile=blurred%20preload'
                        />
                  </InfoPageImageContainer>
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start', marginTop: '20px'}}>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              Worn steering or suspension systems will reduce the braking efficiency, handling and quality of your drive experience. 
                              If you have a problem with your suspension or suspect a problem (noises upon turning or going over bumps), 
                              please do not hesitate to call us. Our service advisors will be able book you in for a free steering & suspension check.


                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              Our fully qualified technicians will carry out the repair using original equipment quality parts and the repair 
                              will be covered by our 12 month or 12,000 mile warranty to give you that extra peace of mind.
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
                              <QuickLinksButton title='EXHAUST' icon={faCloudMeatball} $function={() => history.push('/mot')}/>
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

export default SteeringAndSuspensionPage
