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
      @media (max-width: 1000px) {
            font-size: 2vw;
            opacity: 1;
            top: 50%;
            position: static;
      }
      @media (max-width: 750px) {
            font-size: 2.5vw;
      }
      user-select: none
      
`

export const QuickLinkIcon = styled(FontAwesomeIcon)`
      font-size: 5vw;
      color: #8899aa;
      align-self: center;
      transition: transform linear 100ms ;
      @media (max-width: 1000px) {
            font-size: 5vw;

      }
      @media (max-width: 750px) {
            font-size: 7vw;
      }
      user-select: none

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
      
      @media (max-width: 1000px) {
            height: 100px;
            margin: 1% 2%;
            justify-content: space-around;
            &:active ${QuickLinkIcon} {
                  transform: scale(1.3);
            }
            &:active ${QuickLinkTitle} {
                  transform: scale(1.7);
            }

      }

      @media (min-width: 1000px) {
            &:hover ${QuickLinkTitle} {
                  transform: scale(1);
                  opacity: 1;
            };
            transition: background-color ease-out 100ms;
      
            &:hover ${QuickLinkIcon} {
                  transform: scale(0);
            }
      }
      
`
