import React from 'react'
import { ImageCarouselContainer, ImageSlider, LeftCarouselButton, RightCarouselButton, CarouselSlideIndicatorGroup, CarouselSlideIndicator, CarouselIndicatorContainer, CarouselFader } from './image-carousel.styles'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const LandingPage = ({children}) => {
    
      const left = "-";
      const right = "+";
      const [activeCard, setActiveCard] = useState(0);
      const [outDirection, setOutDirection] = useState(left);
      const [inDirection, setInDirection] = useState(right);
  
      const handleClick = (direction) => {
          setInDirection(direction === left ? left : right);
          setOutDirection(direction === left ? right : left);
          // Sets the direction in which the current card will enter and exit.
  
          if (activeCard === 0 && direction === left) {

              setActiveCard(children.length - 1);

          } else if ((activeCard === children.length - 1 ) & (direction === right)) {

              setActiveCard(0);

          } else {

              setActiveCard(direction === left ? activeCard - 1 : activeCard + 1);

          }
          // Ensures the carousel loops through the items infinitely.
      };

      const selectSlide = (idx) => {
            setInDirection(idx < activeCard ? left : right);
            setOutDirection(idx > activeCard ? left : right);
            setActiveCard(idx)
      }

            return (
                  <ImageCarouselContainer >
                        {
                              children.map((el, idx) => {
                                    return (
                                          <CSSTransition
                                                in={activeCard === idx ? true : false}
                                                classNames='carouselSlide'
                                                timeout={500}
                                                unmountOnExit
                                                key={idx}
                                          >
                                                <ImageSlider
                                                      inDirection={inDirection}
                                                      outDirection={outDirection}
                                                >
                                                      {el}
                                                </ImageSlider>
                        
                                          </CSSTransition>
                                    )
                              })
                        }
                        <LeftCarouselButton icon={faChevronLeft} onClick={() => handleClick(left)}/>
                        <RightCarouselButton icon={faChevronRight} onClick={() => handleClick(right)}/>
                        <CarouselFader/>

                        <CarouselIndicatorContainer>
                              <CarouselSlideIndicatorGroup>
                              {
                                    children.map((el, idx) => <CarouselSlideIndicator key={idx} active={activeCard === idx} onClick={() => selectSlide(idx)} /> )
                              }
                              </CarouselSlideIndicatorGroup>
                        </CarouselIndicatorContainer>
                  </ImageCarouselContainer>
                  )
}


export default LandingPage
