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

const OtherServicesPage = ({history, isMobile}) => {
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
                              <span>Other Services</span>
                        </InfoPageTextHeading>

                        <InfoPageTextList>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Minor Maintenance
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
                                    Convenience
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Bulbs And Wipers
                              </InfoPageTextListItem>
                             
                        </InfoPageTextList>
                  </InfoPageHeaderTextContainer>
                  <InfoPageImageContainer>
                        <Image
                              $image="https://printrat.sirv.com/fox/photo-1530046339160-ce3e530c7d2f.jpeg?w=1000"
                              $preLoadImage='https://printrat.sirv.com/fox/photo-1530046339160-ce3e530c7d2f.jpeg?profile=blurred%20preload'
                        />
                  </InfoPageImageContainer>
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start', marginTop: '20px'}}>

                        <WidgetParagraph 
                              $color='dodgerblue'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                              Additional Repairs
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              In addition to those activities listed on Fox Garage offers a comprehensive range of 
                              repairs to help keep your vehicle on the road.

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='dodgerblue'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                              Fuel Recovery
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              If you have inadvertently filled your car with the incorrect fuel please do not hesitate to call us and we 
                              can book you in to have the cars fuel tank drained and your car checked for any problems that the incorrect fuel may have caused.
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='dodgerblue'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                              Batteries
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              If your car has difficulty starting it may be time to change the battery – our fully trained 
                              technicians will also check your alternator to ensure that there are no charging faults causing your battery to fail.
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='dodgerblue'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                              Windscreen Wipers
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              If your windscreen wipers are not clearing the screen its likely that your windscreen wipers are in need of replacement, 
                              do please give Fox Garage a call and bring your car down to have the wipers changed whilst you wait.
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='dodgerblue'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                              Bulbs And Headlamp Assemblies 
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              If you notice any lights that are not working, you may have blown bulbs or a loose connection. 
                              If your Headlamp or rear light assemblies are damaged or defective, we are also able to replace these with new units,
                              for most makes and models. Just call or book online for a quote.


                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='dodgerblue'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                              Fault Investigation
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              If youre experiencing faults with your vehicle which cause the engine management light or emissions light to appear
                              on your dash board Fox Garage Services has the latest diagnostic equipment and software to investigate these faults, 
                              simply book in for an hours investigation. We charge £72.00 for the initial investigation, 
                              upon finding the cause of the fault, we are then able to quote for a repair. 
                              If you accept our quote we may able to reduce the initial investigation fee.
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='dodgerblue'
                              $textAlign='start'
                              $fontWeight='600'
                        >
                              Vehicle Condition Reports
                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     
                              If you book your car in for any of these services we will conduct a thorough vehicle condition report 
                              on your vehicle free of charge, so you can take your car away with total piece of mind that it is safe for the road.


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

export default OtherServicesPage;
