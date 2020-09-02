import styled, {keyframes} from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ComponentContainer = styled.div`
      @media (max-width: 1000px) {
            height: ${props => props.height + 100}px;
      }
      height: ${props => props.height + 50}px;
      width: 100%;
      display: flex; 
      flex-direction: row; 
      justify-content: center;
      align-items: space-around;
      position: relative;
      margin: 10px 0;
      transition: all 200ms ease;
`

export const ComponentSlider = styled.div`
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      will-change: opacity;
      &.appear-enter {
            opacity: 0;
      }
      &.appear-enter-active {
            transition: all 300ms 300ms ease;
            opacity: 1;

      }
      &.appear-exit {
            position: absolute;
      }
      &.appear-exit-active {
            transition: all 300ms ease;
            opacity: 0;            

      }

`
const breatheAnimation = keyframes`
      0% {transform: scale(1);}
      50% {transform: scale(1.5);}
      100% {transform: scale(1);}

`

export const ComponentScrollHint = styled(FontAwesomeIcon)`
      font-size: 3rem;
      color: DODGERBLUE;

      animation-name: ${breatheAnimation};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-out;
      will-change: opacity;
      &.appear-enter {
            position: absolute;
            opacity: 0;
      }
      &.appear-enter-active {
            transition: all 300ms 300ms ease;
            opacity: 1;

      }
      &.appear-exit {
            position: absolute;
      }
      &.appear-exit-active {
            transition: all 300ms ease;
            opacity: 0;            

      }

      

`

