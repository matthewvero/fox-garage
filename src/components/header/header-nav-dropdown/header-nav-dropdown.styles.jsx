import styled from "styled-components/macro";

export const HeaderDropDownContainer = styled.div`
      z-index: 10;
      bottom: -${props => props.height}px;
      right: 0px;
      position: absolute; 
      width: 20vw;
      height: ${props => props.height}px;
      display: flex; 
      flex-direction: column;
      
      background-color: #444444;
      transform-origin: top;
      transition: all 150ms 200ms ease;
      will-change: contents;
      &.nav-menu-enter {
            position: absolute;
            transform: scaleY(0);
          }
      &.nav-menu-enter-active {
            transform: scaleY(1);
      }
      &.nav-menu-exit {
            position: absolute;
      }
      &.nav-menu-exit-active {
            transition: all 0ms ease;
            transform: scaleY(0);
      }
`