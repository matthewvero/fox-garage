import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CarouselContainer = styled.div`
      width: 100%;
      height: 400px;
      background-color: white;
      overflow: hidden;
      position: relative;
      background-color: #666666
`

export const CarouselCard = styled.div`
      width: 60%;
      height: 80%;
      position: absolute; 
      left: 20%;
      top: 10%;
      background-color: #444444;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      &.carouselcard-enter {
            position: absolute;
            transform: translate(${props => props.inDirection}200%, 0);
            opacity: 0
          }
      &.carouselcard-enter-active {
            transition: all 300ms ease;
            transform: translate(0%, 0);
            opacity: 1
      }
      &.carouselcard-exit {
            position: absolute;
      }
      &.carouselcard-exit-active {
            transition: all 300ms ease;
            transform: translate(${props => props.outDirection}200%, 0);
            opacity: 0;

      }
`

export const CarouselButton = styled(FontAwesomeIcon)`
      position: absolute;
      color: DODGERBLUE; 
      top: 45%;
      padding: 30px 20px;
      &:hover { 
            background-color: rgba(55,55,55,0.6);
      }
`

export const CarouselButtonLeft = styled(CarouselButton)`
      left: 5%;

`

export const CarouselButtonRight = styled(CarouselButton)`
      right: 5%;

` 