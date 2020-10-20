import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CustomButtonContainer = styled.div`
      width: 100%;
`

export const CustomButtonSlider = styled.div`
      z-index: 1;
      position: absolute;
      left: -100%;
      top: -50%;
      width: 100%;
      height: 200%;
      
      background-color: #666666;
      transition: transform 200ms ease;
`

export const CustomButtonIcon = styled(FontAwesomeIcon)`
      z-index: 2;
      right: 45%;
      position: absolute; 
      opacity: 0;
`

export const CustomButtonInput = styled.button`
      z-index: 2;
      position: relative;
      width: 80%;
      margin: 0 10%;
      padding: 5px 0;
      display: flex;
      justify-content: space-around;
      overflow: hidden;

      border-radius: 5px;
      box-shadow: 0 0 5px #222222;
      background-color: DODGERBLUE;
      color: white;
      font-size: ${props => props.$fontsize};
      cursor: pointer;
      outline: none; 
      border: none;
      
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
            width: 50%;
            align-self: center;
            margin: 20px;
            font-size: 4vw;
      }
`