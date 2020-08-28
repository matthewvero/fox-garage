import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colorAnimation = keyframes`
      0% {color: dodgerblue;}
      50% {color: rgb(49, 255, 149);}
      100% {color: dodgerblue;}
`





export const EVIconComponent = styled(FontAwesomeIcon)`
      font-size: 10vh;
      color: rgb(49,255,149);
      filter: drop-shadow(0px 0px 5px #333333);
      animation:  ${colorAnimation} 4s linear forwards infinite;
      animation-delay: -2s;
      transition: all 300ms ease;
`;


export const EVIconLeft = styled(EVIconComponent)`
      margin: 10px;
      font-size: 5vh;
      transform: rotate(-30deg);
      animation-delay: -3s;
`
export const EVIconRight = styled(EVIconComponent)`
      margin: 10px;
      font-size: 5vh;
      transform: rotate(30deg);
      animation-delay: -1s;
      
`

export const EVIconContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${EVIconLeft} {
        transform: translateX(-10px) rotate(-45deg) scaleY(1.5);  
        
  }
  &:hover ${EVIconRight} {
        transform: translateX(10px) rotate(45deg) scaleY(1.5);
        
  }

`;





