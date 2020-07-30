import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CustomButtonContainer = styled.div`
      width: 100%;
`

export const CustomButtonSlider = styled.div`
      background-color: #666666;
      width: 100%;
      height: 200%;
      position: absolute;
      top: -50%;
      left: -100%;
      transition: transform 200ms ease;
      z-index: 1;
`

export const CustomButtonIcon = styled(FontAwesomeIcon)`
      position: absolute; 
      right: 45%;
      opacity: 0;
      z-index: 2;
`

export const CustomButtonInput = styled.button`
      margin: 0 10%;
      padding: 5px 0;
      width: 80%;
      outline: none; 
      border-radius: 5px;
      border: none;
      box-shadow: 0 0 5px #222222;
      background-color: DODGERBLUE;
      color: white;
      font-size: ${props => props.$fontsize};
      cursor: pointer;
      overflow: hidden;
      position: relative;
     
      &:hover ${CustomButtonSlider} {
            transform: translate(100%, 0%) scaleX(1.1);

      }

      &:hover ${CustomButtonIcon} {
            transition: opacity 300ms 200ms ease;
            transition: color 300ms 300ms ease;
            color: rgb(50, 255, 150);
            opacity: 1;

      }

      @media (max-width: 1000px) {
            font-size: 4vw;
            width: 50%;
            align-self: center;
            margin: 20px;
      }
`