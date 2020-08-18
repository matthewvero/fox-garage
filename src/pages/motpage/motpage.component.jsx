import React from 'react'
import WidgetCluster from '../../components/info-widget/widget-cluster/widget-cluster.component'

import InfoPageHeader from '../../components/info-page-header/info-page-header.component'
import { InfoPageHeaderTextContainer, InfoPageTextHeadingSection, InfoPageTextList, InfoPageTextListItem, InfoPageImageContainer } from '../../components/info-page-header/info-page-header.styles'
import Page from '../page/page.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from '../../components/image/image.component';

const MOTPage = () => {
      return (
            <Page>
            
            
                  <InfoPageHeader>
                        <InfoPageHeaderTextContainer>

                              <InfoPageTextHeadingSection>
                                    <span>Fox Garage Camberley</span>
                              </InfoPageTextHeadingSection>

                              <InfoPageTextHeadingSection>
                                    <span>MOT</span>
                              </InfoPageTextHeadingSection>

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
                              />
                        </InfoPageImageContainer>
                  </InfoPageHeader>
          
            </Page>
      )
}

export default MOTPage
