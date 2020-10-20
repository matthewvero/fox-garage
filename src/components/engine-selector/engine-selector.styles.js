import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EngineSelectorContainer = styled.div`
      z-index: 4;
      width: 100%;
      height: 10vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center; 
      align-items: space-around;

      background-color: #555555;
      box-shadow: 0 0 10px #222222;
      &.engineSelector-enter {
            transform: translateY(-100%);
          }
          &.engineSelector-enter-active {
            transform: translateY(0%);
            transition: transform 400ms ease;
          }
          &.engineSelector-exit {
            transform: translateY(0%);
          }
          &.engineSelector-exit-active {
            transform: translateY(-100%);
            transition: transform 400ms ease;
          }

      @media (max-width: 1150px) {
            height: 15vw;
      }
`

export const EngineSelectorButtonGroup = styled.div`
      position: relative;
      height: 75%;
      width: 60%;
      display: flex; 
      justify-content: space-around;
      align-items: center;
      
      background-color: #444444;
      box-shadow: inset 0 0 10px #222222;
`

export const EngineSelectorButton = styled.div`
      height: 100%;
      width: 33.33%;
      display: flex;
      flex-flow: row wrap; 
      justify-content: center;
      align-content: center;
      background-color: #444444;
      cursor: pointer;
`


export const EngineSelectorButtonIcon = styled(FontAwesomeIcon)`
      margin: 5px;
      font-size: 2vw;
      color: DODGERBLUE;
      @media (max-width: 1150px) {
            font-size: 3vw;
      }
`
export const EngineSelectorButtonTitle = styled.div`
      height: 30%;
      width: 100%;
      font-size: 2vw;
      color: white;
      @media (max-width: 1150px) {
            font-size: 3vw;
      }
`

export const EngineSelectorTitle = styled.div`
      width: 90vw;
      height: 20%;
      display: flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.5vw;
      color: white;
      @media (max-width: 1150px) {
            font-size: 2vw;
      }
`