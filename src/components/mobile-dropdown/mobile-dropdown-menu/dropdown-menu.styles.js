import styled from "styled-components/macro";

export const DropdownMenuBox = styled.div`
      position: absolute;
      right: 2vw;
      top: 10vh;
      height: ${props => props.height}px;
      width: 96vw;
      padding: 10px 0;
      border-radius: 10px;
      overflow: hidden;
      
      box-shadow: 0 0 5px #222222;
      background: #666666;
      transition: height 200ms ease;
      will-change: transform;
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