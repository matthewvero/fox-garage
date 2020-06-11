import styled from 'styled-components'



export const HamburgerLine = styled.div`
      height: 5px;
      width: 70%;
      border-radius: 2px;
      box-shadow: inset 0 0 5px #aaaaaa;
      transition: all 300ms ease;
      transform-origin: left;
`

export const DropDownButton = styled.div`
      width: 50px;
      height: 50px;
      background: #eeeeee;
      border-radius: 5px;
      box-shadow: 0 3px 3px #aaaaaa;
      display: flex; 
      transform: translate(0, -3px);
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 20% 0;
      box-sizing: border-box;
      overflow: hidden;
      &:hover {
            transform: translate(0px, 0) scale;
            box-shadow: none;

      }      

      ${HamburgerLine}:nth-child(1) {
            transform: ${props => props.open ? 'translate(5px, 0) rotate(45deg) scale(1.02); ' : null};
      }
      ${HamburgerLine}:nth-child(3) {
            transform: ${props => props.open ? 'translate(5px, 0) rotate(-45deg) scale(1.02);' : null};
      }
      ${HamburgerLine}:nth-child(2) {
            transform: ${props => props.open ? 'translate(-50px, 0);' : null};x
      }

`