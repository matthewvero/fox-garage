import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const DropdownMenuItemText = styled.div`
      font-size: 1.75rem;
      margin-left: 10px;
      padding-left: 10px;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
`

export const DropdownMenuItemIcon = styled(FontAwesomeIcon)`
      
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
      width: 90%;
      height: 50px;
      text-align: left;
      transition: all 300ms ease;
      display: flex; 
      flex-flow: row nowrap;
      align-items: center;
      transition: all 100ms ease;
      border-radius: 10px;
      cursor: pointer;
      z-index: 3;

      &:hover {
            background-color: #cccccc;
      }

      @media (max-width: 1000px) {
            &:hover {
                  background-color: white;
            } 
            &:active {
                  background-color: #cccccc;

            } 

      }


`