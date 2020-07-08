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
      transition: all 75ms ease;
      box-shadow: 0 10px 10px #333333;
      z-index: 4;
      &.nav-menu-enter {
            position: absolute;
            transform: scaleY(0);
          }
      &.nav-menu-enter-active {
            transition: all 100ms 125ms ease;
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