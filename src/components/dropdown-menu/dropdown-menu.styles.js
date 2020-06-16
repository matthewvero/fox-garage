import styled from 'styled-components'

export const DropdownMenuBox = styled.div`
      position: absolute;
      height: 500px;
      width: 96vw;
      background: white;
      top: 90px;
      right: 2vw;
      box-shadow: 0 0 5px #aaaaaa;
      border-radius: 10px;
      overflow: hidden;
      padding: 10px 0;
      &.dropdown-enter {
            position: absolute;
            transform: translateX(120%);
          }
      &.dropdown-enter-active {
            transform: translateX(0%);
            transition: all 200ms ease;
            
      }
      &.dropdown-exit {
            position: absolute;
      }
      &.dropdown-exit-active {
            transform: translateX(120%);
            transition: all 200ms ease;
      }

` 