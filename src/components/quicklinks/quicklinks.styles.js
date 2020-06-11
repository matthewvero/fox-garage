import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const QuickLinksContainer = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap; 
      height: 100%;
      justify-content: center;
      align-items: center;
`


export const QuickLinkTitle = styled.div`
      font-size: 1.3vw;
      position: absolute;
      top: 45%;
      text-align: center;
      transform: scale(2);
      transition: all ease-out 100ms;
      opacity: 0;
      color: #8899aa;
      
`

export const QuickLinkIcon = styled(FontAwesomeIcon)`
      font-size: 5vw;
      color: #8899aa;
      align-self: center;
      transition: transform ease-out 100ms ;

`


export const QuickLinksButton = styled.div`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      width: 42%;
      margin: 0 2%;
      height: 30%;
      box-sizing: border-box;
      box-shadow: 0 0px 5px #bbbbbb;
      position: relative;
      justify-content: center;
      align-items: center;
      overflow:hidden;
      cursor: pointer;
      background-color: #eeeeee;
      
      &:hover ${QuickLinkTitle} {
            transform: scale(1);
            opacity: 1;
      };
      transition: background-color ease-out 100ms;

      &:hover ${QuickLinkIcon} {
            transform: scale(0);
      }
`
