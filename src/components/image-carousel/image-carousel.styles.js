import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ImageCarouselContainer = styled.div`
      position: relative;
      width: 100vw;
      height: 40vh; 
`

export const ImageCarouselSlide = styled.div`
      width: 100%;
      height: 100%;
      display: flex; 
      flex-direction: column;
      align-content: center; 
      justify-content: space-around;
      box-shadow: inset 0 0 30px #000000;
`

export const ImageSlider = styled.div`
      width: 100%;
      height: 40vh;
&.carouselSlide-enter {
      position: absolute;
      transform: translate(${(props) => props.inDirection}100%, 0);
  }
&.carouselSlide-enter-active {
      transition: all 400ms ease;
      transform: translate(0%, 0);
}
&.carouselSlide-exit {
      position: absolute;
}
&.carouselSlide-exit-active {
      transition: all 400ms ease;
      transform: translate(${(props) => props.outDirection}100%, 0);
}
`

export const CarouselButton = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 1;
  top: 0px;
  height: 100%;
  padding: 0 100px;
  
  cursor: pointer;
  color: white;
  transition: all 100ms ease;
  font-size: 3rem;
  @media (max-width: 1000px){
    padding: 0 50px;
    &:active {
      background-color: rgba(50,50,50, 0.7);
    }
  }
  @media (max-with: 800px) {
    padding: 0 25px;

  }

  @media (min-width: 1000px) {
    &:hover {
          background-color: rgba(50,50,50, 0.7);
    }

  }
`

export const LeftCarouselButton = styled(CarouselButton)`
  left: 0%;
`

export const RightCarouselButton = styled(CarouselButton)`
  right: 0%;
`



export const CarouselSlideIndicator = styled.div`
  height: 1vw;
  width: 1vw; 
  margin: 0 0.5vw;
  border: solid 3px white;
  border-radius: 50%;
  ${props => props.active ? 'background-color: white;' : null}
  cursor: pointer;

`
export const CarouselSlideIndicatorGroup = styled.div`
  height: 2vw;
  display: flex; 
  align-items: center;
  justify-content: space-around; 
  border-radius: 15px;
  background-color: rgba(50,50,50,0.5);
  transition: all 100ms ease;
  &:hover {
      background-color: rgba(50,50,50, 0.7);

  }
  
`

export const CarouselIndicatorContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  width: 100%;
  height: 50px;
  display: flex; 
  justify-content: center;
  align-items: center;
`

export const CarouselFader = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(50,50,50, 0.3);
`

export const CarouselTitle = styled.div`
  z-index: 1;
  margin: 0 15vw;
  ${props => props.alignment === 'left' ? 'align-self: flex-start;' : null}
  ${props => props.alignment === 'right' ? 'align-self: flex-end;' : null}
  color: ${props => props.color};
  font-size: 3vw;
  font-weight: 600;

  @media (max-width: 1150px) {
    font-size: 5vw;
  }

`
export const CarouselSubtitle = styled.div`
  z-index: 1;
  margin: 0 15vw;
  ${props => props.alignment === 'left' ? 'align-self: flex-start;' : null}
  ${props => props.alignment === 'right' ? 'align-self: flex-end;' : null}
  color: ${props => props.color};
  font-weight: 600;
  font-size: 2vw; 
  
  @media (max-width: 1150px) {
    font-size: 4vw;
  }
  `