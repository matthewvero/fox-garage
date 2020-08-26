import React from 'react'
import Page from '../page/page.component';
import {
      InfoPageHeaderTextContainer, 
      InfoPageTextHeading,
      InfoPageTextSubHeading, 
      InfoPageImageContainer
} from '../../components/info-page-header/info-page-header.styles';
import InfoPageHeader from '../../components/info-page-header/info-page-header.component';
import {faCloudMeatball, faOilCan, faSnowflake, faDotCircle, faCogs, faListAlt} from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/image/image.component';
import WidgetCluster from '../../components/info-widget/widget-cluster/widget-cluster.component';
import Widget from '../../components/info-widget/widget/widget.component';
import WidgetText from '../../components/info-widget/widget-text/widget-text.component';
import WidgetParagraph from '../../components/info-widget/widget-paragraph/widget-paragraph.component';
import { LatestNews } from '../../data/data';
import { AppearHOC } from '../../components/appear-hoc/appear-hoc.component';
import QuickLinks from '../../components/quicklinks/quicklinks-container/quicklinks.component';
import QuickLinksButton from '../../components/quicklinks/quicklinks-button/quicklinks-button.component';
import NewsCards from '../../components/news-cards/news-cards.component';
import HoveringBookNowButton from '../../components/book-now-hovering-button/book-now.component';
import EVIcon from '../../components/evicon/evicon.component';
import { EVServiceContainer } from './hybridandevpage.styles';

const HybridAndEvPage = ({history, isMobile}) => {
      return (
            <Page>
            <HoveringBookNowButton/>
            <InfoPageHeader
                  style={{
                        minHeight: '40vh',
                        boxShadow: '0 0 15px #222222'
                  }}
            >
                  <InfoPageImageContainer>
                        <Image
                              $image="https://printrat.sirv.com/fox/fox/photo-1571987502227-9231b837d92a-min.jpeg"
                              $alt='electric vehicle image'
                        />
                  </InfoPageImageContainer>
                  <InfoPageHeaderTextContainer 
                        style={{padding: '2vw'}}
                        $color='#666666'
                  >

                        <InfoPageTextSubHeading style={{height: '10%', alignSelf: 'start'}}>
                              <span>Fox Garage Camberley</span>
                        </InfoPageTextSubHeading>

                        <InfoPageTextHeading style={{height: '10%', alignSelf: 'start', textAlign: 'left', width: '100%', color: 'rgb(49,255,149)'}}>
                              <span>Hybrid And Electrical Vehicle Servicing</span>
                        </InfoPageTextHeading>

                        <WidgetParagraph
                              $textAlign='left'
                              $fontSize='1vw'
                              $color='white'
                              style={{paddingLeft: '0px'}}
                        >
                              Whether you’re the proud owner of a Toyota Prius, BMW i3 or a Honda Civic hybrid,
                              our Bosch technicians are experienced with all makes and models.
                              This means there’s no need to pay extra at a main dealer.
                        </WidgetParagraph>
                        <InfoPageTextSubHeading style={{height: '10%',alignSelf: 'start', color: 'rgb(49,255,149)'}}>
                              <span >Which Hybrid Service Do I Need? </span>
                        </InfoPageTextSubHeading>
                        <WidgetParagraph
                              $textAlign='left'
                              $fontSize='1vw'
                              $color='white'
                              style={{paddingLeft: '0px'}}
                        >
                              If you’re not sure which service your vehicle is due, we’ll advise you based on your mileage and when you last had a service done.
                        </WidgetParagraph>
                  </InfoPageHeaderTextContainer>
                  
            </InfoPageHeader>

            
            <WidgetCluster width='95vw'>
                  <Widget style={{justifyContent: 'flex-start', marginTop: '20px'}}>

                        <div style={{
                              margin: '2vw'
                        }}>
                              <EVIcon/>
                              
                        </div>
                        <div style={{padding: '0 5vw'}}>
                              <WidgetText
                                    $color='white'
                              >
                                    FOX GARAGE SERVICES, CAMBERLEY
                              </WidgetText>
                              <WidgetText
                                    $color='rgb(49,255,149)'
                              >
                                    COMPLETE & STANDARD ELECTRIC & HYBRID VEHICLE SERVICING 
                              </WidgetText>
                              <WidgetParagraph
                              $color='white'
                              >
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                              </WidgetParagraph>
                        </div>
                        <div
                              style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}
                        >
                              <EVServiceContainer>
                                 
                              </EVServiceContainer> 
                              <EVServiceContainer>


                              </EVServiceContainer> 
                        </div>

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
                        <QuickLinksButton title='EXHAUST' icon={faCloudMeatball} $function={() => history.push('/exhaust')}/>

                        </QuickLinks>
                  </Widget>
            </WidgetCluster>
            </AppearHOC>

      </Page>
      )
}

export default HybridAndEvPage
