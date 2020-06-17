import styled from 'styled-components'

export const DropdownMenuSectionContainer = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      cursor: auto;
      
      &.menu-primary-enter {
            position: absolute;
            transform: translateX(-110%);
          }
      &.menu-primary-enter-active {
            transform: translateX(0%);
            transition: all 200ms ease;
      }
      &.menu-primary-exit {
            position: absolute;
      }
      &.menu-primary-exit-active {
            transform: translateX(-110%);
            transition: all 200ms ease;
      }

      
      &.menu-secondary-enter {
            position: absolute;
            transform: translateX(110%);
          }
      &.menu-secondary-enter-active {
            transform: translateX(0%);
            transition: all 200ms ease;
      }
      &.menu-secondary-exit {
            position: absolute;
      }
      &.menu-secondary-exit-active {
            transform: translateX(110%);
            transition: all 200ms ease;
      }
`