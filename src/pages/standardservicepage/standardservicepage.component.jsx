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
import {faChevronRight, faCloudMeatball, faSnowflake, faDotCircle, faCogs, faBolt, faListAlt} from '@fortawesome/free-solid-svg-icons';
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

const StandardServicePage = ({history, isMobile}) => {
      return (
            <Page>
            <HoveringBookNowButton/>
            <InfoPageHeader>
                  <InfoPageHeaderTextContainer>

                        <InfoPageTextSubHeading>
                              <span>Fox Garage Camberley</span>
                        </InfoPageTextSubHeading>

                        <InfoPageTextHeading>
                              <span>Standard Service</span>
                        </InfoPageTextHeading>

                        <InfoPageTextList>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span> 
                                    Fully Qualified Technicians
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    All Makes & Models
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Comprehensive Checks
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Collection Service
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Simple Online Booking
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
                                    Three Types of Service
                              </InfoPageTextListItem>
                              <InfoPageTextListItem>
                                    <span>
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                    </span>
                                    Fox Garage Warranty
                              </InfoPageTextListItem>
                        </InfoPageTextList>
                  </InfoPageHeaderTextContainer>
                  <InfoPageImageContainer>
                        <Image
                        $image="https://printrat.sirv.com/fox/fox/photo-1530046339160-ce3e530c7d2f-min.jpeg"
                        $alt='tool chest'
                        />
                  </InfoPageImageContainer>
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start'}}>
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                              <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                              
                                    <WidgetText
                                          $textAlign='start'
                                          $color='DODGERBLUE'
                                          $fontWeight='600'
                                    >
                                          PRICING FROM £79.00 (£99.00 WITH MOT)
                                    </WidgetText>
                                    
                                    <WidgetText
                                          $textAlign='start'
                                          $color='DODGERBLUE'
                                          $fontWeight='400'
                                    >
                                          Includes: 
                                    </WidgetText>
                                    <WidgetText
                                          $textAlign='start'
                                          $color='white'
                                          $fontWeight='400'
                                          $textSize='subtext'
                                          style={{margin: '0px 30px'}}
                                          
                                    >
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                          Replace Oil
                                    </WidgetText>
                                    <WidgetText
                                          $textAlign='start'
                                          $color='white'
                                          $fontWeight='400'
                                          $textSize='subtext'
                                          style={{margin: '0px 30px'}}
                                    >
                                          <FontAwesomeIcon icon={faChevronRight}/>
                                          36 Point Safety Check
                                    </WidgetText>
                                    <WidgetText
                                          $textAlign='start'
                                          $color='white'
                                          $fontWeight='400'
                                          $textSize='subtext'
                                          style={{margin: '0px 30px'}}
                                    >
                                          
                                          <span style={{fontWeight:'600'}} >Time Required:</span> 1.5 Hours
                                    </WidgetText>
                                    
                              </div>
                              
                        </div>

                        

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              Regular servicing helps to increase the life span of your vehicle and reduce the risk of breakdowns.
                              Servicing is often based on the age or mileage of a vehicle, however, 
                              our service staff will work with you to find out what your vehicle needs.

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >     

                              Our fully qualified technicians will carry out a thorough examination of your vehicle and we will advise you of any faults or concerns 
                              regarding the safety and reliability of your vehicle, no work will ever be carried out on your vehicle without your permission.
                        
                        </WidgetParagraph>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >

                              This service is recommended every 12 months or every 10,000 miles – whichever comes first. 
                              It is a comprehensive range of services for interim maintenance between your major servicing. 
                        
                        </WidgetParagraph>


                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                        
                              We use original equipment quality parts on all of our services and we use high quality, low ash,
                              fully synthetic 05W30 oil as standard. Specially developed for all makes and models including Audi, BMW, Ford, VW, Seat, 
                              Skoda and Vauxhall. 05W30 fully synthetic oil provides the ultimate protection for exhaust treatment devices such as diesel 
                              particulate filters and catalytic converters. 
                        
                        </WidgetParagraph>

                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                              <span style={{color: 'dodgerblue'}}>Please note:</span> in the event your vehicle requires a non-standard oil, we reserve the right to make an additional charge. This may happen after the initial booking has been accepted, although we will notify you before we the service begins.

                        </WidgetParagraph>
                        <WidgetParagraph 
                              $color='white'
                              $textAlign='start'
                        >
                        <span style={{color: 'dodgerblue'}}>Guarantee</span> <br/>
                        Our services are also covered by our twelve month or 12,000 mile warranty, to guarantee peace of mind.

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
                              <QuickLinksButton title='EXHAUST' icon={faCloudMeatball} $function={() => history.push('/mot')}/>
                              <QuickLinksButton title='MOT' icon={faListAlt} $function={() => history.push('/mot')}/>
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
export default connect(mapState)(StandardServicePage) ;