import styled from "styled-components/macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderContainer = styled.div`
    position: fixed;
    z-index: 5;
    top: 0px;
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    
    color: white;
    background-color: #666666;
    box-shadow: 2px 2px 10px #222222;
`;
//    
export const HeaderNavComponent = styled.div`
    position: relative;
    height: 100%;
    padding: 0px 1.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    color: white;
    background-color: #666666;
    font-size: 1.2rem;
`;

export const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HeaderDropDownIcon = styled(FontAwesomeIcon)`
    bottom: 10px;
    margin-top: 10px;
    align-self: center;
    color: DODGERBLUE;
    transition: all 150ms 200ms linear;
`;

export const HeaderContactDetails = styled(HeaderNavComponent)`
    width: 175px;
    height: 75%;
    margin: 10px;
    border-radius: 10px;
    background-color: #666666;

`;

export const HeaderPhoneNo = styled.span`
    color: DODGERBLUE;
    font-weight: 600;
    background-color: #666666;
`;

export const HeaderLogo = styled(HeaderNavComponent)`
    margin: 15px;
    height: 60%;
    font-family: "Comfortaa", cursive;
    font-size: 1.75rem;
    background-color: #666666;
    color: DODGERBLUE;
    border: solid 3px DODGERBLUE;
    border-radius: 50px;
    &:hover {
        color: #bbbbbb;
        border-color: #bbbbbb;

    }
`;
