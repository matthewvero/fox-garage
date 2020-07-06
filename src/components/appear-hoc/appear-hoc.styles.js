import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ComponentContainer = styled.div`
      height: 700px;
      width: 100%;
      display: flex; 
      flex-direction: row; 
      justify-content: center;
      position: relative;
      scroll-snap-align: start;
`

export const ComponentSlider = styled.div`
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
