import styled from 'styled-components'

export const DropdownMenuBox = styled.div`
      height: ${props => props.height}px;
      position: absolute;
      width: 96vw;
      background: #666666;
      top: 90px;
      right: 2vw;
      box-shadow: 0 0 5px #222222;
      border-radius: 10px;
      overflow: hidden;
      padding: 10px 0;
      transition: height 200ms ease;
      
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