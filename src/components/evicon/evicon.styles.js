import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EVIconContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const colorAnimation = keyframes`
      0% {color: dodgerblue;}
      45% {color: rgb(49, 255, 149);}
      55% {color: rgb(49, 255, 149);}
      100% {color: dodgerblue;}
`

export const EVIconComponent = styled(FontAwesomeIcon)`
      font-size: 10vh;
      color: rgb(49,255,149);
      filter: drop-shadow(0px 0px 5px #333333);
      animation:  ${colorAnimation} 4s linear forwards infinite;
`;

