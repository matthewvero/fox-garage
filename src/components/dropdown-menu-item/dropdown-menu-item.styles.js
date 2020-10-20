import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const DropdownMenuItemText = styled.div`
      font-size: ${props => props.header ? '1rem' : '1.5rem'};
      margin-left: 10px;
      padding-left: 10px;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      display: flex;
      align-items: center;
      user-select: none;
`

export const DropdownMenuItemIcon = styled(FontAwesomeIcon)`
      user-select: none;

`

export const IconContainer = styled.div`
      width: 60px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`


export const DropdownMenuItemContainer = styled.div`
      width: ${props => props.header ? '100%' : '90%'};
      height: 50px;
      text-align: left;
      display: flex; 
      flex-flow: row nowrap;
      align-items: center;
      transition: all 25ms ease;
      border-radius: 10px;
      cursor: pointer;
      z-index: 3;
      ${props => props.animate ? 'background-color: #444444;' : null}



`