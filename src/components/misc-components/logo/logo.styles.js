import styled from "styled-components/macro";

export const LogoContainer = styled.div`
      display: flex;
      justify-content: center;
`
export const LogoComponent = styled.div`
height: 60%;
padding: 10px 20px;
margin-top: 10px;
align-self: ${props => props.alignment};
justify-self: ${props => props.justify};

color: DODGERBLUE;
border-radius: 50px;
border: solid 3px DODGERBLUE;
font-family: "Comfortaa", cursive;
font-size: 1.75rem;

cursor: pointer;
&:hover {
    color: #bbbbbb;
    border-color: #bbbbbb;
}

`