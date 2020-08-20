import React from 'react'
import {LatestOffersContainer, LatestOffersSection, LatestOfferSectionTitle, LatestOfferItem, LatestOffersTitle} from './latest-offers.styles'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const LatestServices = ({$items}) => {
      return (
            
                  <LatestOffersContainer>
                        <LatestOffersTitle>
                              Latest Offers
                        </LatestOffersTitle>
                        {
                              $items.map(el => (
                                    <LatestOffersSection>
                                          <LatestOfferSectionTitle>
                                                {el.title}
                                          </LatestOfferSectionTitle>
                                          {el.services.map(service => (
                                                <LatestOfferItem>
                                                      <span style={{fontWeight: '400'}}> {service.title}</span>
                                                      <span style={{color: 'dodgerblue', fontWeight: '400'}}>{service.price}</span>
                                                </LatestOfferItem>
                                                
                                          ))}
                                    </LatestOffersSection>
                              ))
                        }
                        <LatestOffersSection>
                              <LatestOfferSectionTitle>
                                    Useful Links
                              </LatestOfferSectionTitle>
                              <LatestOfferItem>
                                    <span>What's Included</span>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                              </LatestOfferItem>
                              <LatestOfferItem>
                                    <span>About Fox</span>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                              </LatestOfferItem>
                              <LatestOfferItem>
                                    <span>Complete Service & MOT</span>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                              </LatestOfferItem>
                              <LatestOfferItem>
                                    <span>Standard Service & MOT</span>
                                    <FontAwesomeIcon icon={faChevronRight}/>
                              </LatestOfferItem>
                        </LatestOffersSection>
                  </LatestOffersContainer>
            
      )
}

export default LatestServices
