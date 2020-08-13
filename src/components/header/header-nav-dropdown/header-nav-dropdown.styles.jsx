import styled from 'styled-components';

export const HeaderDropDownContainer = styled.div`
      position: absolute; 
      width: 20vw;
      height: ${props => props.height}px;
      display: flex; 
      flex-direction: column;
      background-color: #444444;
      bottom: -${props => props.height}px;
      transform-origin: top;
      transition: all 150ms 200ms ease;
      box-shadow: 0 10px 10px #111111;
      z-index: 10;
      right: 0px;
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
            transition: all 75ms ease;
            transform: scaleY(0) scaleX(0.75);
            

      }
`