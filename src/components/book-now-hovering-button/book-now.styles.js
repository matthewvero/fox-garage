import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const BookNowIcon = styled(FontAwesomeIcon)`
      font-size: 3rem;

`

export const BookNowText = styled.div`
      font-size: 1.5rem;
      opacity: 0;
      width: 0px;
      transition: width 200ms ease;
      
`

export const BookNowButtonContainer = styled.div`
      position: fixed; 
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      transition: width 200ms ease; 
      box-shadow: 0 0 10px #222222;
      z-index: 5;
      background-color: DODGERBLUE;
      display: flex; 
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;
      &:hover {
            width: 300px;

      }

      &:hover ${BookNowText} {
            width: 200px;
            opacity: 1;
            transition: opacity 200ms 100ms ease; 

      }
`