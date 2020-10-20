import styled from "styled-components/macro";
export const DropdownMenuSectionContainer = styled.div`
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: auto;
      
      &.menu-primary-enter {
            position: absolute;
            transform: translateX(-110%);
          }
      &.menu-primary-enter-active {
            transform: translateX(0%);
            transition: all 200ms 75ms ease;
      }
      &.menu-primary-exit {
            position: absolute;
      }
      &.menu-primary-exit-active {
            transform: translateX(-110%);
            transition: all 200ms 75ms ease;
      }

      
      &.menu-secondary-enter {
            position: absolute;
            transform: translateX(110%);
          }
      &.menu-secondary-enter-active {
            transform: translateX(0%);
            transition: all 200ms 75ms ease;
            
      }
      &.menu-secondary-exit {
            position: absolute;
      }
      &.menu-secondary-exit-active {
            transform: translateX(110%);
            transition: all 200ms 75ms ease;
      }
`
