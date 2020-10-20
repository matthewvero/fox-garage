import styled from "styled-components/macro";

import {HeaderDropDownIcon} from '../header/header.styles' 

export const HeaderNavComponent = styled.div`
    position: relative;
    z-index: 1;
    width: 11vw;
    height: 100%;
    padding: 0px 1.5vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    
    cursor: pointer;
    transition: all 200ms  ease;
    background-color: #666666;
    font-size: 1.2rem;

    &:hover ${HeaderDropDownIcon} {
          transform: rotate(180deg);
    }
    ${props => props.dropdown? 
      `
            &:hover {
                  background-color: #444444;
                  width: 20vw;
            }
      ` : null

}      
`;