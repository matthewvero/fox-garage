import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ImageCarouselContainer = styled.div`
      width: 100vw;
      height: 40vh; 
      position: relative;
`

export const ImageCarouselSlide = styled.div`
      width: 100%;
      height: 100%;
      display: flex; 
      flex-direction: column;
      align-content: center; 
      box-shadow: inset 0 0 30px #000000;
      justify-content: space-around;
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
  font-size: 3rem;
  color: white;
  position: absolute;
  cursor: pointer;
  top: 0px;
  height: 100%;
  transition: all 100ms ease;
  z-index: 1;
  padding: 0 100px;
  @media (max-width: 1000px){
    padding: 0 50px;

  }
  &:hover {
        background-color: rgba(50,50,50, 0.7);
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
  border: solid 3px white;
  border-radius: 50%;
  ${props => props.active ? 'background-color: white;' : null}
  cursor: pointer;
  margin: 0 0.5vw;

`
export const CarouselSlideIndicatorGroup = styled.div`
  height: 2vw;
  border-radius: 15px;
  background-color: rgba(50,50,50,0.5);
  display: flex;
  flex-direction: row; 
  flex-wrap: nowrap; 
  justify-content: space-around; 
  align-items: center;
  transition: all 100ms ease;
  &:hover {
      background-color: rgba(50,50,50, 0.7);

  }
  
`

export const CarouselIndicatorContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 50px;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const CarouselFader = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(50,50,50, 0.3);
  position: absolute;
  top: 0px;
`

export const CarouselTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: ${props => props.color};
  ${props => props.alignment === 'left' ? 'align-self: flex-start;' : null}
  ${props => props.alignment === 'right' ? 'align-self: flex-end;' : null}
  margin: 0 15vw;
  z-index: 1;

`
export const CarouselSubtitle = styled.div`
  font-size: 2rem; 
  color: ${props => props.color};
  font-weight: 600;
  ${props => props.alignment === 'left' ? 'align-self: flex-start;' : null}
  ${props => props.alignment === 'right' ? 'align-self: flex-end;' : null}
  margin: 0 15vw;
  z-index: 1;
  `