import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 0px;
    display: flex;
    flex-direction: row;
    height: 90px;
    justify-content: space-between;
    box-shadow: 2px 2px 10px #aaaaaa;
    background-color: white;
    z-index: 5;
`;

export const HeaderNavComponent = styled.div`
    padding: 0px 1.5vw;
    height: 100%;
    background-color: white;
    display: flex;
    font-size: 1.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: #dddddd;
        color: DODGERBLUE;
    }
    
    @media (max-width: 850px) {
        ${props => props.collapse ?  'display: none;' : null};
    }
    
`;

export const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderDropDownIcon = styled(FontAwesomeIcon)`
    bottom: 10px;
    color: DODGERBLUE;
    position:absolute;

`;

export const HeaderContactDetails = styled(HeaderNavComponent)`
    width: 175px;
    height: 75%;
    margin: 10px;
    border-radius: 10px;
`;

export const HeaderPhoneNo = styled.span`
    color: DODGERBLUE;
    font-weight: 600;
`;

export const HeaderLogo = styled(HeaderNavComponent)`
    font-family: "Comfortaa", cursive;
    font-size: 1.75rem;

    color: DODGERBLUE;
    border: solid 3px DODGERBLUE;
    border-radius: 50px;
    margin: 15px;
    height: 60%;
    &:hover {
        background-color: white;
        color: #bbbbbb;
        border-color: #bbbbbb;

    }
`;
