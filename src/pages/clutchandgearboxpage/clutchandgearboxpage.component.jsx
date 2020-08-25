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

const ClutchAndGearboxPage = ({history, isMobile}) => {
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
                              <span>Clutch And Gearbox</span>
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
                              $image="https://printrat.sirv.com/fox/photo-1560574188-6a6774965120.jpeg?w=1000"
                              $preLoadImage='https://printrat.sirv.com/fox/photo-1560574188-6a6774965120.jpeg?profile=blurred%20preload'
                              $alt='picture of gears'
                        />
                  </InfoPageImageContainer>
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start', marginTop: '20px'}}>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              Fox Garage offers a clutch and gearbox replacement service – 
                              if you are looking to have your clutch or gearbox replaced our fully qualified technicians are able to carry out the repair.

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                        We can provide a rangeof pricing options for you upon request, feel free to call for a quote on <span style={{fontWeight: '600', color: 'dodgerblue'}}>01276 704600</span>.  Our quotes always include parts, labour & VAT. 
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              <span style={{fontWeight: '600', color: 'dodgerblue'}}>Additional Information</span>

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              If you are unsure whether or not you do have an issue with your vehicles clutch or gearbox call and arrange an 
                              investigation with our service staff, some indications of a fault with your clutch are the following:

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                        

                        <FontAwesomeIcon icon={faChevronRight}/> Difficulty getting the car into gear. <br/>
                        <FontAwesomeIcon icon={faChevronRight}/> A rattling or grinding noise when changing gear.<br/>
                        <FontAwesomeIcon icon={faChevronRight}/> Inability to engage the gears at all.<br/>
                        <FontAwesomeIcon icon={faChevronRight}/> A juddering when pulling away from a stationary position.<br/>
                        <FontAwesomeIcon icon={faChevronRight}/> The engine RPM increases, but the vehicles speed does not.<br/>
                        <FontAwesomeIcon icon={faChevronRight}/> A pronounced burning smell.<br/>

                        </WidgetParagraph>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              We will always provide a free quote before starting work on your vehicle and we will never carry out any work without you, 
                              the customers’ permission. All of our work is carried out with a 12 month or 12,000 miles guarantee, 
                              the details of which can be found here: link to terms and conditions page.
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

export default ClutchAndGearboxPage
