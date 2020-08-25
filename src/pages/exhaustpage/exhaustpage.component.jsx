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

const ExhaustPage = ({history, isMobile}) => {
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
                              <span>Exhausts</span>
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
                              $image="https://printrat.sirv.com/fox/photo-1572435759312-848041b1d659-2.jpeg?w=1000"
                              $preLoadImage='https://printrat.sirv.com/fox/photo-1572435759312-848041b1d659-2.jpeg?profile=blurred%20preload'
                        />
                  </InfoPageImageContainer>
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start', marginTop: '20px'}}>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              If you can hear rattling or increased noise from your cars exhaust system or you suspect that something may be wrong call 
                              us on <span style={{fontWeight: '600', color: 'dodgerblue'}}>01276 704600</span> and one of our service advisors will be happy to 
                              help you book your car in so that we are able to check and report any issues to you, providing fully costed pricing, which includes parts, 
                              labour & VAT.


                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              We are able to supply and fit exhausts for most makes and models.

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

export default ExhaustPage;
