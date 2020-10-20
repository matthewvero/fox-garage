import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const QuickLinkIcon = styled(FontAwesomeIcon)`
      align-self: center;
      transition: transform linear 100ms ;
      font-size: 5vw;
      color: DODGERBLUE;
      user-select: none;
      @media (max-width: 1000px) {
            font-size: 5vw;

      }
      @media (max-width: 750px) {
            font-size: 7vw;
      }

`

export const QuickLinkTitle = styled.div`
      position: absolute;
      top: 45%;

      opacity: 0;
      color: white;
      text-align: center;
      font-size: 1.3vw;
      transform: scale(2);
      transition: all ease-out 100ms;
      user-select: none;

      @media (max-width: 1000px) {
            font-size: 2vw;
            opacity: 1;
            top: 50%;
            position: static;
      }
      @media (max-width: 750px) {
            font-size: 2.5vw;
      }
      
`


export const QuickLinksButtonContainer = styled.div`
      position: relative;
      width: 42%;
      margin: 0 2%;
      height: 30%;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      box-shadow: inset 0 0 10px #222222;
      background-color: #444444;
      
      box-sizing: border-box;
      overflow: hidden;
      cursor: pointer;
      @media (max-width: 1000px) {
            height: 100px;
            margin: 1% 2%;
            justify-content: space-around;
            &:active {
                  background-color: #555555;
            }
            &:active ${QuickLinkTitle} {
                  color: white;
            };


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
            &:hover {
                  background-color: #333333;
            }
      }
      
`


