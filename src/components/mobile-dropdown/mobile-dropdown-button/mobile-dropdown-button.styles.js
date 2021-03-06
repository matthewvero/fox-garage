import styled from "styled-components/macro";



export const HamburgerLine = styled.div`
      height: 5px;
      width: 70%;
      border-radius: 2px;
      transition: all 300ms ease;
      transform-origin: left;
      background-color: DODGERBLUE;
`

export const DropDownButton = styled.div`
      width: 50px;
      height: 50px;
      padding: 20% 0;
      display: flex; 
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      background: #444444;
      box-sizing: border-box;
      border-radius: 5px;
      

      ${HamburgerLine}:nth-child(1) {
            transform: ${props => props.open ? 'translate(5px, 0) rotate(45deg) scale(1.02); ' : null};
      }
      ${HamburgerLine}:nth-child(3) {
            transform: ${props => props.open ? 'translate(5px, 0) rotate(-45deg) scale(1.02);' : null};
      }
      ${HamburgerLine}:nth-child(2) {
            transform: ${props => props.open ? 'translate(-50px, 0);' : null};
      }

`